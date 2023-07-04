export default async function Loading() {
	return (
		<div className="flex flex-row gap-16 animate-pulses">
			<div className="relative w-1/4 h-[170px] bg-black-10"></div>
			<div className="relative w-3/4 p-8">
				<div className="flex flex-row gap-8 items-center">
					<p className="text-h8 uppercase text-secondary font-semibold tracking-wider "></p>
					<div className="rounded-full bg-black-25 w-[4px] h-[4px]" />
				</div>
				<h3 className="font-antic text-h5 text-primary font-semibold tracking-wider transition-all ease-in-out hover:underline"></h3>
				<p className="text-black-50"></p>
			</div>
		</div>
	);
}
