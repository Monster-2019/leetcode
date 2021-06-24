/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let min = Math.min(...list1.map((el, index) => {
    let i = list2.findIndex(ele => ele === el)
    return i > -1 ? i + index : 99999
  }))
  return list1.filter((el, index) => {
    let i = list2.findIndex(ele => ele === el)
    return (i > -1 ? i : 99999) + index === min
  })
};

let a = findRestaurant(["Shogun", "Piatti", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"])
console.log(a)

// 200ms 5.62%; 43.5mb 71.35%;