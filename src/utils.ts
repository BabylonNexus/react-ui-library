

export function withSSR<T>(ssrState: T, clientState: T) {
    return typeof window !== 'undefined' ? clientState : ssrState
}