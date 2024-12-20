import { ILessonContent } from "@/types/lesson";

const lessonContents: Record<string, ILessonContent> = {
  l1: {
    id: "l1",
    courseId: "1",
    moduleId: "m1",
    moduleTitle: "Introduction to Blockchain",
    title: "What is Blockchain?",
    description:
      "Learn the fundamental concepts of blockchain technology by implementing a basic block structure.",
    challenge:
      "Create a basic blockchain implementation with blocks and hash linking.",
    hints: [
      "Think about what properties a block should have",
      "Consider how blocks are linked together",
      "Remember to use cryptographic hashing for security",
    ],
    objectives: [
      "Understand the basic structure of a blockchain",
      "Learn how blocks are connected using hashes",
      "Implement a simple block class",
    ],
    language: "javascript",
    steps: [
      {
        id: "s1",
        title: "Block Structure",
        description:
          "Let's start by creating the basic structure of a Block class.",
        challenge:
          "Create a Block class with a constructor that initializes timestamp, data, previousHash, nonce and hash properties.",
        hints: [
          "Initialize timestamp, data, and previousHash from constructor parameters",
          "Set nonce to 0 initially",
          "Calculate and set initial hash in constructor",
        ],
        initialCode: `class Block {
  constructor(timestamp, data, previousHash = '') {
    // Initialize block properties here
  }

  calculateHash() {
    // Hash calculation will be implemented in next step
    return '';
  }
}`,
        solution: `class Block {
  constructor(timestamp, data, previousHash = '') {
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return '';
  }
}`,
        tests: [
          {
            input: "block structure",
            expected: {
              timestamp: "number",
              data: "string",
              previousHash: "string",
              nonce: "number",
              hash: "string",
            },
            description:
              "Block should have all required properties with correct types",
          },
        ],
      },
      {
        id: "s2",
        title: "Hash Calculation",
        description: "Now let's implement the hash calculation functionality.",
        challenge:
          "Implement the calculateHash method that combines all block properties and creates a unique hash using SHA256.",
        hints: [
          "Use the SHA256 function provided",
          "Combine timestamp, data, previousHash and nonce into a single string",
          "Return the hash as a string",
        ],
        initialCode: `class Block {
  constructor(timestamp, data, previousHash = '') {
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    // Implement hash calculation here
    return '';
  }
}`,
        solution: `class Block {
  constructor(timestamp, data, previousHash = '') {
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(
      this.timestamp +
      this.data +
      this.previousHash +
      this.nonce
    ).toString();
  }
}`,
        tests: [
          {
            input: "hash calculation",
            expected: "different hash for different data",
            description: "Hash should change when block data changes",
          },
        ],
      },
    ],
  },
};

export function getLessonById(
  courseId: string,
  lessonId: string
): ILessonContent | undefined {
  const lesson = lessonContents[lessonId];
  return lesson?.courseId === courseId ? lesson : undefined;
}
