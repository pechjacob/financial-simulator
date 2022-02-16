export declare type TrackItem = {
    id: string;
    type: TrackItemType;
};
export declare enum TrackItemType {
    Effect = "EFFECT",
    Event = "EVENT"
}
export declare function toString(trackItem: TrackItem): string;
