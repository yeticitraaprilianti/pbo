// import Button from "./Button";
import Button from "./Button";
import Navbar from "./Navbar";

function HeroSection() {
	return (
		<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 h-[650px]">
			<div className="container mx-auto">
				<Navbar/>
				<div className="text-center mt-16">
					<h1 className="text-white text-3xl w-8/12 leading-relaxed font-semibold font-mono mx-auto">
						Saya seorang front-end engineer, back-end engineer, dan juga UI designer.
					</h1>
					<p className="text-white text-lg text-opacity-60 w-4/12 mx-auto leading-relaxed mt-5">
                        Sejak 17 tahun saya memulai programming. Sejak 16 tahun saya memulai UI designer.
                    </p>
					<Button variant="fill-yellow" >Pelajari</Button>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
