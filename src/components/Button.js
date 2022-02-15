function Button( {children, variant} ) {

	const variants = {
		"outline-yellow": 'border text-yellow-300 border-yellow-300 rounded-full px-10 py-2 inline-block hover:text-white hover:bg-yellow-300',
		"fill-yellow": 'border bg-yellow-300 text-black rounded-full px-10 py-2 mt-10 inline-block hover:text-white'
	};
	const pickedVariant = variants[variant];

	return (
		<a className={`font-semibold text-lg ${pickedVariant}`}>
				{children}
		</a>
	);
}

export default Button;
