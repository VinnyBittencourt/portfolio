import { Info } from "react-feather";
import { Footer } from "../../../components/footer";
import { Header } from "../../../components/header";
import moniramentocapa from "../../../assets/projects/monitoramento/monitoramentocapa.webp";
import moniramentothumb from "../../../assets/projects/monitoramento/monitoramentothumb.webp";

export function MonitoramentoBoxProject() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <section className="grid w-full h-[200px] md:h-[30vh] max-h-[280px]">
                <img
                    src={moniramentocapa}
                    loading="lazy"
                    alt="Monitoramento Project Background"
                    className="block object-cover rounded-none w-full h-[200px] md:h-[30vh] max-h-[280px] opacity-100 object-[center_50%] border-t-1 border-b-1 border-(--border-color)"
                />
            </section>
            <section className="w-full lg:max-w-[710px] m-auto mt-8 md:mt-12 mb-24  flex items-center flex-col gap-6 px-4 md:px-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-left w-full ">Box monitoring</h1>
                <div className="flex flex-wrap gap-2 w-full mt-0 md:mt-2">
                    <p className="px-2 py-0.5 bg-amber-200 rounded text-sm text-nowrap">UX Strategy</p>
                    <p className="px-2 py-0.5 bg-blue-200 rounded text-sm text-nowrap">UX Research</p>
                    <p className="px-2 py-0.5 bg-purple-200  rounded text-sm text-nowrap">UX/UI</p>
                    <p className="px-2 py-0.5 bg-indigo-200  rounded text-sm text-nowrap">User Testing</p>
                    <p className="px-2 py-0.5 bg-green-200  rounded text-sm text-nowrap">Mapping</p>
                </div>
                <div className="flex rounded border border-(--border-color) bg-white gap-3 p-4 w-full ">
                    <Info size={24} className="mt-1 text-(--brand-dark)" />
                    <div className="flex flex-col gap-4 w-full">
                        <p className="">
                            For confidentiality reasons regarding corporate information, specific details about this product and its creation will not be
                            disclosed.
                        </p>
                    </div>
                </div>
                <div className="w-full">
                    <img
                        src={moniramentothumb}
                        loading="lazy"
                        alt="Minuta Digital Project Thumbnail"
                        className="block object-cover rounded w-full h-auto max-h-[962px] opacity-100 object-[center_50%]"
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
}
