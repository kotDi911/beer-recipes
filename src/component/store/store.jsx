import create from 'zustand';

export const useRecipe = create((set, get) => ({
    recipes: [],
    selectedRecipes: [],
    currentPage: 1,
    url: '',
    addPage: () => {
        set((state) => ({ currentPage: state.currentPage + 1 }));
    },
    addSelectedRecipes: (recipe) => {
        const { selectedRecipes } = get();
        set({ selectedRecipes: [...selectedRecipes, recipe] });
    },
    delSelectedRecipes: (id) => {
        const { selectedRecipes } = get();
        set({ selectedRecipes: selectedRecipes.filter((item) => item.id !== id) });
    },
    fetchList: async () => {
        try {
            const { currentPage } = get();
            const { recipes } = get();
            const res = await fetch(`https://api.punkapi.com/v2/beers?page=${currentPage}`);
            
            if (!res.ok) throw new Error('Field...')
            const data = await res.json();
            if (data === null || data.length === 0) throw new Error('no data')

            set({ recipes: [...recipes, ...data], error: null })
        } catch (error) {
            set({ error: error.message })
        }
    },
    error: null
}));