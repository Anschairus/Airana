export interface Adapter<T> {
    adapt(characterTab: any): T;
}