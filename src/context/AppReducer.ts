
type State = { transactions: { id: number; text: string; amount: number; }[]; }

export default (state: State, action: { type: string; }) => {
    switch (action.type) {
        default:
            return state;
            
    }
}