import * as d from '@motion-canvas/2d'
import * as c from '@motion-canvas/core'
import './../font.css'

export default d.makeScene2D(function* (view) {
    const
        rm = c.createRef<d.Txt>(),
        introCirc = c.createRef<d.Circle>()

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

    yield* c.chain(
        rm().text('refmaven', 1 / 2),
        c.all(
            introCirc().width(1, 1 / 2),
            introCirc().height(1, 1 / 2),
            c.delay(3 / 4, introCirc().scale(1080, 1 / 2)),
        ),
        c.waitFor(3)
    )
})