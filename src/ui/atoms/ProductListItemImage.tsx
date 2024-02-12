import Image from "next/image";

export const ProductListItemImage = ({
	url,
	alt,
	width = 250,
	height = 300,
}: {
	url: string;
	alt: string;
	width?: number;
	height?: number;
}) => {
	return (
		<div className="flex w-full justify-center overflow-hidden rounded-lg bg-gray-200">
			<Image
				width={width}
				height={height}
				alt={alt}
				src={url}
				className="cursor-pointer rounded object-fill p-6 transition-transform duration-200 ease-in-out hover:scale-110"
			/>
		</div>
	);
};
