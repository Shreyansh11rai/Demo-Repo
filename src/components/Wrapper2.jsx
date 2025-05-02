export default function Wrapper2({children,className}) {
    return (
        <div className={`px-4 sm:px-8 md:px-16 lg:px-20 ${className}`}>
            {children}
        </div>
    )
}