export declare const reducer: import("redux").Reducer<import("redux").CombinedState<{
    forecast: import("./forecast").State;
}>, import("../types/forecast").Action>;
export declare type State = ReturnType<typeof reducer>;
