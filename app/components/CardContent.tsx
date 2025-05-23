import Icon from './Icon';

interface CardContentProps {
    icon: any;
    title: string;
    value: string;
    date: string | null;
    isLoading: boolean;
}

export default function CardContent({ icon, title, value, date, isLoading }: CardContentProps) {
    return (
        <div className="flex flex-col items-start justify-center p-4 text-center gap-2">
            <div className="flex items-center gap-4">
                <Icon icon={icon} alt="Icon" />
                <div className="flex flex-col items-start justify-center">
                    <div className="text-sm text-gray-500 font-inter m-0">{title}</div>
                    {isLoading ? (
                        <div className="animate-pulse h-8 w-24 bg-gray-200 rounded"></div>
                    ) : (
                        <>
                            <p className="font-inter font-medium text-2xl text-gray-500 m-0">
                                {value}
                            </p>
                            {date && (
                                <p className="text-xs text-gray-400 mt-1">
                                    {date}
                                </p>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}