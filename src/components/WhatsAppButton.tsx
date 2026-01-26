import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
    const phoneNumber = "+56951096594";
    const message = "Hola, me gustaría obtener más información sobre sus servicios de IA y Analytics.";
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 animate-bounce hover:animate-none transition-transform duration-300 hover:scale-110"
            aria-label="Contactar por WhatsApp"
        >
            <div className="bg-[#25D366] p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] border border-[#25D366] flex items-center justify-center group relative">
                {/* Tooltip */}
                <span className="absolute right-full mr-3 bg-white text-slate-800 text-xs font-semibold py-2 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100 italic">
                    ¡Hablemos por WhatsApp!
                </span>

                {/* Real WhatsApp SVG Icon */}
                <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12.031 6.305c-2.825 0-5.132 2.307-5.132 5.132 0 .881.25 1.745.725 2.503l-.77 2.81 2.876-.754c.738.4 1.569.608 2.301.608 2.825 0 5.132-2.308 5.132-5.132 0-2.825-2.302-5.167-5.132-5.167zm3.1 7.206c-.131.369-.656.671-1.07.72-.303.033-.697.058-1.123-.074-.27-.082-.607-.205-.984-.369-1.615-.705-2.673-2.344-2.754-2.459-.082-.114-.664-.885-.664-1.688 0-.803.418-1.197.566-1.361.139-.156.311-.23.418-.23h.3c.09 0 .213.008.311.23l.435 1.05c.041.09.074.197.016.311-.057.114-.082.18-.172.287-.09.115-.197.246-.28.328-.106.106-.213.221-.09.434.122.213.541.894 1.156 1.443.795.705 1.467.926 1.672 1.033.205.106.328.09.45-.057.124-.148.525-.615.665-.828.139-.213.278-.18.467-.107l1.32.623c.188.09.311.139.377.246.066.115.066.656-.066 1.025zM12.031 0C5.39 0 0 5.39 0 12.031c0 2.115.549 4.189 1.59 6.017L0 24l6.115-1.607C7.885 23.443 9.918 24 12.031 24 18.672 24 24 18.672 24 12.031 24 5.39 18.672 0 12.031 0zM12.03 21.796c-1.934 0-3.83-.525-5.484-1.516l-.393-.23-3.64.959.975-3.557-.254-.402a9.71 9.71 0 0 1-1.492-5.132c0-5.385 4.385-9.77 9.77-9.77s9.77 4.385 9.77 9.77-4.385 9.77-9.77 9.77z" />
                </svg>
            </div>
        </a>
    );
};

export default WhatsAppButton;
