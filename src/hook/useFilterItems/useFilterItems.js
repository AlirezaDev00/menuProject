export default function useFilterItems(items , category) {
    const filteredItems = items.filter(item => {
        if (category !== "all") {
            return item.category === category
        } else {
            return item
        }
    })

    return filteredItems
}
