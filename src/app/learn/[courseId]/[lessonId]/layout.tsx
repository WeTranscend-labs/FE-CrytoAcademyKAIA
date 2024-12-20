export default function LearningLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">
            {children}
        </div>
    );
}