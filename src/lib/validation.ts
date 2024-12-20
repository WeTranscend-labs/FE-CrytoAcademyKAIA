import { TestCase, TestResult } from "../types/lesson";

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  testResults: TestResult[];
}

export async function validateSolution(
  code: string,
  tests: TestCase[]
): Promise<ValidationResult> {
  try {
    // First check for syntax errors
    validateSyntax(code);

    // Run the code in a safe environment
    const sandbox = createSandbox(code);
    const testResults = await runTests(sandbox, tests);

    return {
      isValid: testResults.every((test) => test.passed),
      testResults,
    };
  } catch (error) {
    return {
      isValid: false,
      testResults: [
        {
          passed: false,
          description: "Code Execution Error",
          error:
            error instanceof Error ? error.message : "Unknown error occurred",
        },
      ],
    };
  }
}

function validateSyntax(code: string): void {
  try {
    new Function(code);
  } catch (error) {
    throw new Error(
      `Syntax Error: ${
        error instanceof Error ? error.message : "Invalid code syntax"
      }`
    );
  }
}

function createSandbox(code: string): any {
  const sandbox = {
    SHA256: (input: string) => {
      // Simple hash function for demo purposes
      return {
        toString: () => {
          const str = typeof input === "string" ? input : String(input);
          let hash = 0;
          for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash = hash & hash;
          }
          return Math.abs(hash).toString(16);
        },
      };
    },
  };

  try {
    const wrappedCode = `
      ${code}
      return { Block };
    `;
    return Function(
      ...Object.keys(sandbox),
      wrappedCode
    )(...Object.values(sandbox));
  } catch (error) {
    throw new Error(
      `Code Initialization Error: ${
        error instanceof Error ? error.message : "Failed to initialize code"
      }`
    );
  }
}

async function runTests(
  sandbox: any,
  tests: TestCase[]
): Promise<TestResult[]> {
  const results: TestResult[] = [];

  for (const test of tests) {
    try {
      const { Block } = sandbox;

      if (test.input === "block structure") {
        // Test block structure
        const block = new Block(Date.now(), "test data");
        const actualTypes = {
          timestamp: typeof block.timestamp,
          data: typeof block.data,
          previousHash: typeof block.previousHash,
          nonce: typeof block.nonce,
          hash: typeof block.hash,
        };

        const allPropertiesMatch = Object.entries(test.expected).every(
          ([prop, type]) =>
            actualTypes[prop as keyof typeof actualTypes] === type
        );

        if (allPropertiesMatch) {
          results.push({
            passed: true,
            description: test.description,
          });
        } else {
          results.push({
            passed: false,
            description: test.description,
            expected: test.expected,
            actual: actualTypes,
            error: "Block properties do not match expected types",
          });
        }
      } else if (test.input === "hash calculation") {
        // Test hash calculation
        const block = new Block(Date.now(), "test data");
        const initialHash = block.hash;

        // Modify data and recalculate hash
        block.data = "modified data";
        const newHash = block.calculateHash();

        if (initialHash !== newHash) {
          results.push({
            passed: true,
            description: test.description,
          });
        } else {
          results.push({
            passed: false,
            description: test.description,
            error: "Hash should change when block data changes",
            expected: "Different hash value",
            actual: "Hash remained the same",
          });
        }
      }
    } catch (error) {
      results.push({
        passed: false,
        description: test.description,
        error: error instanceof Error ? error.message : "Test execution failed",
      });
    }
  }

  return results;
}
