export const NEW_MAP_HIGHLIGHT = "NEW_HIGHLIGHT";
export const NO_MAP_HIGHLIGHT = "NO_MAP_HIGHLIGHT";

export const newMapHighlight = benchId => ({
    type: NEW_MAP_HIGHLIGHT,
    benchId
})

export const noMapHighlight = benchId => ({
    type: NO_MAP_HIGHLIGHT,
    benchId
})