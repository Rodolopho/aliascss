export const animation = {
    'x-animation-fade-in': {
        type: 'raw',
        statement: `.x-animation-fade-in {
    animation: fade-in var(--x-animation-duration, 1.2s) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes fade-in {
    from {
        opacity: var(--fade-from, 0)
    }

    to {
        opacity: var(--fade-to, 1)
    }
}`,
    },
    'x-animation-fade-out': {
        type: 'raw',
        statement: `
.x-animation-fade-out {
    animation: fade-out var(--x-animation-duration, 1.2s) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes fade-out {
    from {
        opacity: var(--fade-to, 1)
    }

    to {
        opacity: var(--fade-from, 0)
    }
}`,
    },
    'x-animation-slide-up': {
        type: 'raw',
        statement: `.x-animation-slide-up {
    animation: slide-up var(--x-animation-duration, 1.2s) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes slide-up {
    from {
        opacity: var(--fade-from, 0);
        transform: translateY(var(--slide-y, 18px)) scale(var(--scale-from, .92))
    }

    to {
        opacity: var(--fade-to, 1);
        transform: translateY(0) scale(var(--scale-to, 1))
    }
}
`
    },
    'x-animation-slide-left': {
        type: 'raw',
        statement: `.x-animation-slide-left {
    animation: slide-left var(--x-animation-duration, 1.2s) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes slide-left {
    from {
        opacity: var(--fade-from, 0);
        transform: translateX(var(--slide-x, 24px)) scale(var(--scale-from, .92))
    }

    to {
        opacity: var(--fade-to, 1);
        transform: translateX(0) scale(var(--scale-to, 1))
    }
}
`
    },
    'x-animation-zoom-in': {
        type: 'raw',
        statement: `.x-animation-zoom-in {
    animation: zoom-in var(--x-animation-duration, 1.2s) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes zoom-in {
    from {
        opacity: var(--fade-from, 0);
        transform: scale(var(--scale-from, .92))
    }

    to {
        opacity: var(--fade-to, 1);
        transform: scale(var(--scale-to, 1))
    }
}
`
    },
    'x-animation-rotate-in': {
        type: 'raw',
        statement: `.x-animation-rotate-in {
    animation: rotate-in var(--x-animation-duration, 1.2s) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes rotate-in {
    from {
        opacity: var(--fade-from, 0);
        transform: rotate(var(--rotate-from, -8deg)) scale(var(--scale-from, .92))
    }

    to {
        opacity: var(--fade-to, 1);
        transform: rotate(var(--rotate-to, 0deg)) scale(var(--scale-to, 1))
    }
}
`
    },
    'x-animation-bounce': {
        type: 'raw',
        statement: `.x-animation-bounce {
    animation: bounce calc(var(--x-animation-duration, 1.2s) * 1.15) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0)
    }

    30% {
        transform: translateY(var(--bounce-y, -18px))
    }

    55% {
        transform: translateY(0)
    }

    70% {
        transform: translateY(calc(var(--bounce-y, -18px) * .45))
    }
}
`
    },
    'x-animation-shake': {
        type: 'raw',
        statement: `.x-animation-shake {
    animation: shake calc(var(--x-animation-duration, 1.2s) * .9) ease-in-out var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes shake {

    0%,
    100% {
        transform: translateX(0)
    }

    20% {
        transform: translateX(calc(var(--shake-x, 10px) * -1))
    }

    40% {
        transform: translateX(var(--shake-x, 10px))
    }

    60% {
        transform: translateX(calc(var(--shake-x, 10px) * -.65))
    }

    80% {
        transform: translateX(calc(var(--shake-x, 10px) * .65))
    }
}
`
    },
    'x-animation-float': {
        type: 'raw',
        statement: `.x-animation-float {
    animation: float calc(var(--x-animation-duration, 1.2s) * 1.3) ease-in-out var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) alternate var(--x-animation-fill, both);
}

@keyframes float {
    from {
        transform: translateY(0)
    }

    to {
        transform: translateY(var(--float-y, -10px))
    }
}
`
    },
    'x-animation-flip-y': {
        type: 'raw',
        statement: `.x-animation-flip-y {
    animation: flip-y calc(var(--x-animation-duration, 1.2s) * 1.1) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes flip-y {
    from {
        transform: perspective(500px) rotateY(0)
    }

    to {
        transform: perspective(500px) rotateY(var(--flip-angle, 180deg))
    }
}
`
    },
    'x-animation-reveal': {
        type: 'raw',
        statement: `.x-animation-reveal {
    animation: reveal var(--x-animation-duration, 1.2s) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}


@keyframes reveal {
    from {
        clip-path: var(--clip-from, inset(0 50% 0 50% round 12px), inset(0 50% 0 50% round 12px));
        opacity: .45
    }

    to {
        clip-path: var(--clip-to, inset(0 0 0 0 round 12px));
        opacity: 1
    }
}
`
    },
    'x-animation-shadow-rise': {
        type: 'raw',
        statement: `.x-animation-shadow-rise {
    animation: shadow-rise calc(var(--x-animation-duration, 1.2s) * 1.1) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) alternate var(--x-animation-fill, both);
}

@keyframes shadow-rise {
    from {
        transform: translateY(0);
        box-shadow: var(--shadow-rise-from, 0 18px 30px rgba(15, 23, 42, .10))
    }

    to {
        transform: translateY(-6px);
        box-shadow: var(--shadow-rise-to, 0 28px 44px rgba(15, 23, 42, .22))
    }
}
`
    },
    'x-animation-slide-down': {
        type: 'raw',
        statement: `.x-animation-slide-down {
    animation: slide-down var(--x-animation-duration, 1.2s) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes slide-down {
    from {
        opacity: var(--fade-from, 0);
        transform: translateY(calc(var(--slide-y, 18px) * -1)) scale(var(--scale-from, .92))
    }

    to {
        opacity: var(--fade-to, 1);
        transform: translateY(0) scale(var(--scale-to, 1))
    }
}
`
    },
    'x-animation-slide-right': {
        type: 'raw',
        statement: `.x-animation-slide-right {
    animation: slide-right var(--x-animation-duration, 1.2s) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes slide-right {
    from {
        opacity: var(--fade-from, 0);
        transform: translateX(calc(var(--slide-x, 24px) * -1)) scale(var(--scale-from, .92))
    }

    to {
        opacity: var(--fade-to, 1);
        transform: translateX(0) scale(var(--scale-to, 1))
    }
}
`
    },
    'x-animation-zoom-out': {
        type: 'raw',
        statement: `.x-animation-zoom-out {
    animation: zoom-out var(--x-animation-duration, 1.2s) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes zoom-out {
    from {
        opacity: var(--fade-to, 1);
        transform: scale(var(--scale-up, 1.08))
    }

    to {
        opacity: var(--fade-from, 0);
        transform: scale(var(--scale-to, 1))
    }
}
`
    },
    'x-animation-spin': {
        type: 'raw',
        statement: `.x-animation-spin {
    animation: spin var(--x-animation-duration, 1.2s) linear var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes spin {
    from {
        transform: rotate(0turn)
    }

    to {
        transform: rotate(var(--spin-turn, 1turn))
    }
}
`
    },
    'x-animation-pulse': {
        type: 'raw',
        statement: `.x-animation-pulse {
    animation: pulse var(--x-animation-duration, 1.2s) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
        opacity: 1
    }

    50% {
        transform: scale(var(--pulse-scale));
        opacity: .88
    }
}
`
    },
    'x-animation-swing': {
        type: 'raw',
        statement: `.x-animation-swing {
    animation: swing calc(var(--x-animation-duration, 1.2s) * 1.1) ease-in-out var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
    transform-origin: top center;
}

@keyframes swing {
    0% {
        transform: rotate(0)
    }

    20% {
        transform: rotate(var(--swing-angle, 12deg))
    }

    40% {
        transform: rotate(calc(var(--swing-angle, 12deg) * -.7))
    }

    60% {
        transform: rotate(calc(var(--swing-angle, 12deg) * .45))
    }

    80% {
        transform: rotate(calc(var(--swing-angle, 12deg) * -.2))
    }

    100% {
        transform: rotate(0)
    }
}
`
    },
    'x-animation-flip-x': {
        type: 'raw',
        statement: `.x-animation-flip-x {
    animation: flip-x calc(var(--x-animation-duration, 1.2s) * 1.1) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes flip-x {
    from {
        transform: perspective(500px) rotateX(0)
    }

    to {
        transform: perspective(500px) rotateX(var(--flip-angle, 180deg))
    }
}
`
    },
    'x-animation-blur-in': {
        type: 'raw',
        statement: `.x-animation-blur-in {
    animation: blur-in var(--x-animation-duration, 1.2s) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes blur-in {
    from {
        opacity: var(--fade-from, 0);
        filter: blur(var(--blur-from, 8px));
        transform: scale(.98)
    }

    to {
        opacity: var(--fade-to, 1);
        filter: blur(0);
        transform: scale(1)
    }
}
`
    },
    'x-animation-glow': {
        type: 'raw',
        statement: `.x-animation-glow {
    animation: glow calc(var(--x-animation-duration, 1.2s) * 1.2) ease-in-out var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) alternate var(--x-animation-fill, both);
}

@keyframes glow {
    from {
        box-shadow: var(--glow-a, 0 0 0 rgba(99, 102, 241, 0))
    }

    to {
        box-shadow: var(--glow-b, 0 0 24px rgba(99, 102, 241, .45))
    }
}
`
    },
    'x-animation-wipe-x': {
        type: 'raw',
        statement: `.x-animation-wipe-x::before {
    animation: wipe-x var(--x-animation-duration, 1.2s) var(--x-animation-timing-function, cubic-bezier(.2, .8, .2, 1)) var(--x-animation-delay, 0s) var(--x-animation-iteration-count, 1) var(---x-animation-direction, normal) var(--x-animation-fill, both);
}

@keyframes wipe-x {
    from {
        transform: translateX(var(--wipe-x-from, -100%))
    }

    to {
        transform: translateX(var(--wipe-x-to, -0%))
    }
}`
    }
}