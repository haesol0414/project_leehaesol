import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
	key: 'localStorage',
	storage: localStorage,
});

export const cartAtom = atom({
	key: 'cartAtom',
	default: [],
	effects_UNSTABLE: [persistAtom],
});

// 카트 내부 총 가격 계산
export const totalPriceSelector = selector({
	key: 'totalPriceSelector',
	get: ({ get }) => {
		const cartList = get(cartAtom);
		return cartList.reduce(
			(acc, cartItem) =>
				acc + cartItem.discountedPrice * cartItem.quantity,
			0
		);
	},
});
