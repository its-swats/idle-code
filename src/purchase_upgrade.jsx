export function purchaseUpgrade(state, item) {
	if (state.get("code") >= state.getIn(["upgrades", "purchasables", item, "cost"])) {
		return state.updateIn(["upgrades", "purchasables", item, "owned"], val => val + 1);
	} else {
		return state
	}

}