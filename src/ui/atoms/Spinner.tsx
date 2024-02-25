import { Loader2 } from "lucide-react";

export const Spinner = () => {
	return (
		<div className="flex h-full w-full animate-spin items-center justify-center align-middle text-purple-600 ">
			<Loader2 size={48} color="currentColor" />
		</div>
	);
};
