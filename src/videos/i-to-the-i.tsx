import * as d from '@motion-canvas/2d'
import * as c from '@motion-canvas/core'
import './../font.css'
export default d.makeScene2D(function* (view) {
	const
		rm = c.createRef<d.Txt>(),
		introCirc = c.createRef<d.Circle>(),
		text1 = c.createRef<d.Txt>(),
		text2 = c.createRef<d.Txt>(),
		math1 = c.createRef<d.Latex>()

	view.add(<d.Txt
		ref={rm}
		fontSize={100}
		fill={'white'}
		fontFamily={'JetBrains Mono'}
		fontWeight={500}
		opacity={1}
		text={'rm'}
		position={[0, 0]}
		offset={[0, 0]}
	></d.Txt>)

	view.add(<d.Circle
		ref={introCirc}
		fill={'#0f0f0f'}
		width={0}
		height={0}
		position={[0, 0]}
		opacity={1}
	></d.Circle>)

	view.add(<d.Txt
		ref={text1}
		fill={'white'}
		fontFamily={'JetBrains Mono'}
		position={[0, -130 / 2]}
		fontSize={100}
	></d.Txt>)

	view.add(<d.Latex
		ref={math1}
		tex={' '}
		fontSize={100}
		fill={'white'}
		position={[0, 130 / 2]}
	></d.Latex>)

	view.add(<d.Txt
		ref={text2}
		fill={'white'}
		fontFamily={'JetBrains Mono'}
		position={[0, 150]}
		fontSize={50}
	></d.Txt>)

	yield* c.chain(
		rm().text('refmaven', 1 / 2),
		c.all(
			introCirc().width(1, 1 / 2),
			introCirc().height(1, 1 / 2),
			c.delay(3 / 4, introCirc().scale(1080, 1 / 2)),
			math1().position([0, 0], 1 / 2)
		),
		math1().tex('i^i = \\;?'.split(' '), 1 / 2), c.waitFor(3 / 2),
		c.all(math1().position([0, 125 / 2], 1 / 2), math1().tex('i'.split(' '), 1 / 2), text1().fontSize(50, 1 / 2)),
		c.all(text1().text('express i in exponential form.', 1 / 2), text1().position([0, -125 / 2], 1 / 2)),
		c.delay(2, math1().tex('i = e^{i\\frac{\\pi}{2}}'.split(' '), 1 / 2)),
		c.delay(2, text1().text('raise both sides to the power of i.', 1 / 2)),
		c.delay(2, math1().tex('i^i = e^{i^2\\left(\\frac{\\pi}{2}\\right)}'.split(' '), 1 / 2)),
		c.delay(2, c.all(
			text1().position.y(-150, 1 / 2),
			math1().position.y(0, 1 / 2),
			text2().text('since i^2 = -1 ...', 1 / 2)
		)),
		c.delay(3, c.all(
			text1().text('it can be simplified to this.', 1 / 2),
			math1().position([0, 75], 1 / 2),
			text1().position([0, -75], 1 / 2),
			text2().text('', 1 / 2),
			math1().tex('i^i = e^{-\\frac{\\pi}{2}}'.split(' '), 1 / 2),
			c.waitFor(3)
		)),
		text1().text('which is approximately ...', 1 / 2),
		c.delay(1, math1().tex('i^i \\approx 0.20788'.split(' '), 1 / 2)),
		c.delay(3, text1().text('but this is just the principal value.', 1 / 2)),
		c.delay(3, text1().text('expressions like this has infintely many values.', 1 / 2)),
		c.delay(1, math1().tex('i^i = e^{-\\frac{\\pi}{2}} \\approx 0.20788'.split(' '), 1 / 2)),
		c.delay(1, math1().tex('i^i = e^{-\\frac{3\\pi}{2}} \\approx 0.00898'.split(' '), 1 / 2)),
		c.delay(1, math1().tex('i^i = e^{-\\frac{5\\pi}{2}} \\approx 0.00039'.split(' '), 1 / 2)),
		c.delay(1, math1().tex('i^i = e^{-\\frac{7\\pi}{2}} \\approx 0.00002'.split(' '), 1 / 2)),
		c.waitFor(2),
		c.all(
			text1().text('', 1 / 2),
			text2().position([0, 0], 1 / 2),
			math1().tex(''.split(''), 1 / 2),
		),
		c.delay(1 / 2, c.all(
			text2().text('because complex logarithm has\ninfinite branches, each one gives\na different result when used\nfor exponentiation.', 1 / 2),
		)),
		c.delay(6, text2().text('', 1 / 2)),
		c.waitFor(1)
	)
});