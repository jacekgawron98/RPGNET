import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CanvasToolState } from "@rpgnet/game"
import { GameState } from "../../types";

const initialState: GameState = {
    canvasToolState: 'MOVE'
}

export const gameStateSlice = createSlice({
    name: "canvasToolState",
    initialState,
    reducers: {
        changeToolState: (state: GameState, action: PayloadAction<CanvasToolState>) => {
            state.canvasToolState = action.payload
        }
    }
})

export const { changeToolState } = gameStateSlice.actions;

export default gameStateSlice.reducer;