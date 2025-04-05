import * as d from '@motion-canvas/2d'
import * as c from '@motion-canvas/core'
import './../font.css'

export default d.makeScene2D(function* (view) {
	const
		h = 1 / 2,
		// intro
		rm = c.createRef<d.Txt>(),
		introCirc = c.createRef<d.Circle>(),

		// from "i to the i"
		text1 = c.createRef<d.Txt>(),
		text2 = c.createRef<d.Txt>(),
		math1 = c.createRef<d.Latex>(),

		// number lines / complex plane
		realNumberLine = c.createRef<d.Line>(),
		realNumberMarks: d.Line[] = [],
		integers: d.Txt[] = [],
		imaginaryNumberLine = c.createRef<d.Line>(),
		imaginaryNumberMarks: d.Line[] = [],
		imaginaryNumbers: d.Txt[] = [],
		point = c.createRef<d.Circle>(),
		pointText = c.createRef<d.Txt>(),

		// complex plane (smaller))
		realNumberMarksSmall: d.Line[] = [],
		integersSmall: d.Txt[] = [],
		imaginaryNumberMarksSmall: d.Line[] = [],
		imaginaryNumbersSmall: d.Txt[] = [],
		complexNumberPoint1 = c.createRef<d.Circle>(),
		complexNumberPoint2 = c.createRef<d.Circle>(),
		line = c.createRef<d.Line>(),
		lineText = c.createRef<d.Txt>()


	// intro components
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
	// end intro components

	// number lines / complex plane
	view.add(<d.Line
		ref={realNumberLine}
		stroke={'white'}
		lineWidth={6.5}
		points={[[0, 0]]}
	></d.Line>)

	view.add(c.range(9).map(i => (
		<d.Line
			ref={c.makeRef(realNumberMarks, i)}
			stroke={'white'}
			lineWidth={6.5}
			opacity={0}
			points={[[192 * (i - 4), -25], [192 * (i - 4), 25]]}
		></d.Line>
	)))

	view.add(c.range(9).map(i => (
		<d.Txt
			ref={c.makeRef(integers, i)}
			fill={'white'}
			fontFamily={'JetBrains Mono'}
			position={[192 * (i - 4), 70]}
			fontSize={50}
			text={`${i - 4}`}
			opacity={0}
		></d.Txt>
	)))

	view.add(<d.Line
		ref={imaginaryNumberLine}
		stroke={'white'}
		lineWidth={6.5}
		points={[[0, 0]]}
	></d.Line>)

	view.add(c.range(8).map(i => (
		<d.Line
			ref={c.makeRef(imaginaryNumberMarks, i)}
			stroke={'white'}
			lineWidth={6.5}
			opacity={0}
			points={[[-25, 192 * (i - 4)], [24, 192 * (i - 4)]]}
		></d.Line>
	)))

	view.add(c.range(8).map(i => (
		<d.Txt
			ref={c.makeRef(imaginaryNumbers, i)}
			fill={'white'}
			fontFamily={'JetBrains Mono'}
			position={[80, 192 * (i - 4)]}
			fontSize={50}
			text={`${i - 4 != 0 ? i - 4 == -1 ? 'i' : i - 4 == 1 ? '-i' : `${-(i - 4)}i` : ''}`}
			opacity={0}
		></d.Txt>
	)))

	view.add(<d.Circle
		ref={point}
		width={50}
		height={50}
		opacity={0}
		fill={'#ffffff'}
	></d.Circle>)

	view.add(<d.Txt
		ref={pointText}
		fill={'#ffffff'}
		fontFamily={'JetBrains Mono'}
		fontSize={50}
		opacity={1}
	></d.Txt>)

	let range = 20,
		midpoint = range / 2,
		length = 110,
		smallWidth = 4

	view.add(c.range(range).map(i => (
		<d.Line
			ref={c.makeRef(realNumberMarksSmall, i)}
			stroke={'white'}
			lineWidth={smallWidth}
			opacity={0}
			points={[[length * (i - midpoint), -25], [length * (i - midpoint), 25]]}
		></d.Line>
	)))

	view.add(c.range(range).map(i => (
		<d.Txt
			ref={c.makeRef(integersSmall, i)}
			fill={'white'}
			fontFamily={'JetBrains Mono'}
			position={[length * (i - midpoint), 55]}
			fontSize={35}
			text={`${i - midpoint != 0 ? i - midpoint : ''}`}
			opacity={0}
		></d.Txt>
	)))

	view.add(c.range(range).map(i => (
		<d.Line
			ref={c.makeRef(imaginaryNumberMarksSmall, i)}
			stroke={'white'}
			lineWidth={smallWidth}
			opacity={0}
			points={[[-25, length * (i - midpoint)], [24, length * (i - midpoint)]]}
		></d.Line>
	)))

	view.add(c.range(range).map(i => (
		<d.Txt
			ref={c.makeRef(imaginaryNumbersSmall, i)}
			fill={'white'}
			fontFamily={'JetBrains Mono'}
			position={[65, length * (i - 4)]}
			fontSize={35}
			text={`${i - 4 != 0 ? i - 4 == -1 ? 'i' : i - 4 == 1 ? '-i' : `${-(i - 4)}i` : ''}`}
			opacity={0}
		></d.Txt>
	)))

	let point1Color = '#34e33d',
		point2Color = '#818bf7'

	view.add(<d.Line
		ref={line}
		stroke={'white'}
		lineWidth={9}
		opacity={1}
		points={[[0, 0]]}
	></d.Line>)

	view.add(<d.Circle
		ref={complexNumberPoint1}
		width={30}
		height={30}
		opacity={0}
		fill={point1Color}
	></d.Circle>)

	view.add(<d.Circle
		ref={complexNumberPoint2}
		width={30}
		height={30}
		opacity={0}
		fill={point2Color}
	></d.Circle>)

	view.add(<d.Txt
		ref={lineText}
		fill={'white'}
		fontFamily={'JetBrains Mono'}
		fontSize={40}
	></d.Txt>)
	// end number lines / complex plane

	view.add(<d.Txt
		ref={text1}
		fill={'white'}
		fontFamily={'JetBrains Mono'}
		position={[0, -250 / 2]}
		fontSize={50}
	></d.Txt>)

	view.add(<d.Latex
		ref={math1}
		tex={' '}
		fontSize={100}
		fill={'white'}
		position={[0, 0]}
	></d.Latex>)

	view.add(<d.Txt
		ref={text2}
		fill={'white'}
		fontFamily={'JetBrains Mono'}
		position={[0, 250 / 2]}
		fontSize={50}
	></d.Txt>)

	yield* c.chain(
		rm().text('refmaven', h),
		c.all(
			introCirc().width(1, h),
			introCirc().height(1, h),
			c.delay(3 / 4, introCirc().scale(1080, h)),
			text1().position([0, -75], h),
			math1().position([0, 75], h)
		),
		c.delay(h, text1().text('we define i as the number that satisfies:', h)),
		c.delay(1, math1().tex('i^2 = -1'.split(' '), h)),
		c.delay(2, c.all(
			text1().position([0, -125], h),
			math1().position([0, 0], h),
			text2().text('but this equation actually has 2 solutions.', h))),
		c.delay(3, c.all(
			text1().position([0, -175], h),
			text1().text('', h),
			text2().position([0, 75], h),
			math1().position([0, -75], h),
			math1().tex('i = \\pm \\sqrt{-1}'.split(' '), h)
		)),
		c.delay(3, c.all(
			text1().position([0, -75], h),
			text2().position([0, 175], h),
			math1().position([0, 75], h),
			text1().text('but we use the positive root by convention.', h),
			text2().text('', h),
			math1().tex('i = \\sqrt{-1}'.split(' '), h)
		)),
		c.delay(3, c.all(
			text1().text('', h),
			text2().text('', h),
			math1().tex('', h)
		)),
		c.delay(h, c.chain(
			realNumberLine().points([[-960, 0], [959, 0]], h),
			...realNumberMarks.map(mark => mark.opacity(1, h / 18)),
			...integers.map(number => number.opacity(1, h / 18))
		)),
		c.delay(1, c.all(
			text1().position([0, -125], h),
			text1().text('the number i doesn\'t live in the real number line.', h)
		)),
		c.delay(2, c.all(
			text1().text('the number i doesn\'t\nlive in the real\nnumber line.', h),
			text1().position([192 * (-4) + 290, -175], h)
		)),
		c.delay(1, c.chain(
			integers[4].text('', h),
			imaginaryNumberLine().points([[0, -540], [0, 539]], h),
			...imaginaryNumberMarks.map(mark => mark.opacity(1, h / 16)),
			...imaginaryNumbers.map(number => number.opacity(1, h / 16))
		)),
		c.delay(1, text1().text('i and its multiples,\n(the "imaginary numbers")\nlive in a separate line.', h)),
		c.delay(3, text1().text('we call this new line,\nthe "imaginary axis".', h)),
		c.delay(3, text1().text('and we\'ll call the real\nnumber line "real axis".', h)),
		c.delay(3, text1().text('together, they\'re called\nthe "complex plane".', h)),
		c.delay(3, text1().text('and numbers that live\nin this plane are called\n"complex numbers".', h)),
		c.delay(3, text1().opacity(0, h)),
		c.delay(h, text2().position([-192 * 3 + 18, -400], h / 2)),
		text2().text('examples of\ncomplex numbers', h / 2),
		point().opacity(1, 1),
		c.all(
			point().position([192 * 3, 192 * -2], h),
			pointText().position([192 * 3, 192 * -2 + 70], h)
		),
		c.delay(h, c.all(
			pointText().position([192 * 3, 192 * -2 + 70], h),
			pointText().text('3 + 2i', h)
		)),
		c.waitFor(2),
		c.all(
			pointText().text('', h),
			point().position([192 * 2, 192 * -1], h),
			pointText().position([192 * 2, 192 * -1 + 70], h)
		),
		c.delay(h, pointText().text('2 + i', h)),
		c.waitFor(2),
		pointText().text('', h),
		c.all(
			point().position([192 * 3, 192], h),
			pointText().position([192 * 3, 192 * 1 + 70], h)
		),
		c.delay(h, pointText().text('3 - i', h)),
		c.waitFor(2),
		pointText().text('', h),
		c.all(
			point().position([192 * -4, 192 * 2], h),
			pointText().position([192 * -4, 192 * 2 + 70], h)
		),
		c.delay(h, pointText().text('-4 - 2i', h)),
		c.waitFor(2),
		pointText().text('', h),
		c.all(
			point().position([192 * -4, 0], h),
			pointText().position([192 * -4, 70], h)
		),
		text2().opacity(0, h),
		text1().text('real numbers are\ncomplex numbers too.', h / 4),
		text1().opacity(1, h / 4),
		c.waitFor(1),
		pointText().text('', h),
		c.all(
			point().position([192 * 1 / 2, 0], h),
			pointText().position([192 * 1 / 2, 70], h)
		),
		c.delay(h, pointText().text('½', h / 4)),
		c.waitFor(1),
		pointText().text('', h),
		c.all(
			point().position([192 * Math.sqrt(2), 0], h),
			pointText().position([192 * Math.sqrt(2), -125], h)
		),
		c.delay(h, pointText().text('√2\n(approx.)', h / 4)),
		c.waitFor(1),
		pointText().text('', h),
		c.all(
			point().position([192 * Math.PI, 0], h),
			pointText().position([192 * Math.PI, -125], h)
		),
		c.delay(h, pointText().text('π\n(approx.)', h / 4)),
		c.waitFor(1),
		pointText().text('', h),
		c.all(
			point().position([0, 0], h),
			pointText().position([0, -125], h)
		),
		c.waitFor(1),
		c.all(
			text1().position.x(192 * (-2.7), h),
			text1().text('and so are\nimaginary numbers.', h),
			point().position([0, 0], h),
			pointText().position([0, -125], h)
		),
		c.waitFor(1),
		pointText().text('', h),
		c.all(
			point().position([0, 192 * -1], h),
			pointText().position([80, 192 * -1], h)
		),
		c.waitFor(1),
		pointText().text('', h),
		c.all(
			point().position([0, 192 * 2], h),
			pointText().position([80, 192 * 2], h)
		),
		c.waitFor(1),
		pointText().text('', h),
		c.all(
			point().position([0, 0], h),
			pointText().position([0, -125], h)
		),
		point().opacity(0, h),
		c.waitFor(1),
		// number line scaling
		c.all(
			text1().text('', h),
			realNumberLine().lineWidth(4, h),
			imaginaryNumberLine().lineWidth(4, h),
			...realNumberMarks.map(mark => mark.lineWidth(smallWidth, h)),
			...realNumberMarks.map(mark => mark.opacity(0, h)),
			...imaginaryNumberMarks.map(mark => mark.lineWidth(smallWidth, h)),
			...imaginaryNumberMarks.map(mark => mark.opacity(0, h)),
			...integers.map(integer => integer.opacity(0, h)),
			...imaginaryNumbers.map(i => i.opacity(0, h)),
		),
		...realNumberMarksSmall.map(mark => mark.opacity(1, h / range)),
		...integersSmall.map(integer => integer.opacity(1, h / range)),
		...imaginaryNumberMarksSmall.map(mark => mark.opacity(1, h / range)),
		...imaginaryNumbersSmall.map(number => number.opacity(1, h / range)),
		text1().fontSize(40, h / 4),
		text1().position([length * -5, length * -2.5], h / 4),
		text1().text('we can do basic arithmetic\nwith complex numbers too.', h / 2),
		text2().position([length * -5.2, length * -1.75], h / 4),
		c.delay(2, c.all(
			text1().text('let\'s add these 2 complex\nnumbers together:', h),
			text1().position([length * -5.2, length * -3.75], h / 4),
		)),
		c.all(
			math1().fontSize(50, h),
			math1().position([length * -7.2, length * -2], h),
		),
		math1().tex('\\begin{aligned} 2 + 3i \\\\4 - 2i \\end{aligned}'.split(' '), h),
		c.all(
			complexNumberPoint1().position([-670, -262], h),
			complexNumberPoint2().position([-670, -185], h)
		),
		c.all(
			complexNumberPoint1().opacity(1, h),
			complexNumberPoint2().opacity(1, h)
		),
		c.all(
			complexNumberPoint1().position([length * 2, length * -3], h),
			complexNumberPoint2().position([4 * length, length * 2], h),

			lineText().position([length * 4, length * -2.5], h),
			lineText().fill(point2Color, h)
		),

		c.all(
			line().points([[length * 2, length * -3], [length * 6, length * -3]], h),
			line().stroke(point2Color, h),
		),
		lineText().text('4', h),
		complexNumberPoint1().position([length * 6, length * -3], h),
		lineText().text('', h),
		c.all(
			lineText().position([length * 5.35, length * -2], h),

			line().points([[length * 6, length * -3], [length * 6, length * -1]], h),
			line().stroke(point2Color, h),
		),
		lineText().text('-2i', h),
		complexNumberPoint1().position([length * 6, length * -1], h),
		c.waitFor(3)
	)
});