import Link from "next/link"
 
const CtaSection = () => {
return (
    <section className="py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <div className="bg-gradient-to-br from-red-200 to-gray-50 dark:from-gray-900 dark:bg-gray-800 rounded-lg p-8 md:p-10 py-14 lg:p-14 flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-start md:items-start gap-8">
                <div className="md:w-2/5">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-red-950 dark:text-white font-display font-bold leading-tight">
                        Invierte en tu Negocio
                    </h1>
                </div>
                <div className="flex flex-col md:flex-1 space-y-8">
                    <p className="text-gray-700 dark:text-gray-300">
                    Mantén tu operación siempre en marcha. Invierte en una planta de luz confiable. <br />Descubre nuestras plantas de luz de alto rendimiento.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <Link href="#" className="h-12 px-5 rounded-md flex items-center bg-red-600 text-white">
                            Contáctanos
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}
export default CtaSection