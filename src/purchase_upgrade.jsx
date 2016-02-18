export function purchaseUpgrade(state, item) {
	let cost = state.getIn(["upgrades", "purchasables", item, "cost"]);
	let updateType = state.getIn(["upgrades", "purchasables", item, "increase"]).toArray()[0]
	let updateAmount = state.getIn(["upgrades", "purchasables", item, "increase"]).toArray()[1]
	if (state.get("code") >= cost) {
		return state.withMutations(state => {
			state.updateIn(["player", "codeSpent"], val => val + cost);
			state.updateIn(["upgrades", "purchasables", item, "owned"], val => val + 1);
			state.updateIn(["upgrades", "purchasables", item, "cost"], val => val + 5);
			state.update('code', val => val - cost)
			state.updateIn(["player", updateType], val => val + updateAmount)
		})
	} else {
		return state
	}
}

