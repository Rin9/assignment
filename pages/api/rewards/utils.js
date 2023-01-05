//util function to calculate the rewards
export const getRewards = function (data) {
  return data.reduce((prev, next) => {
    let reward;
    if (next.total < 50) {
      reward = 0;
    } else if (next.total >= 50 && next.total <= 100) {
      reward = next.total - 50;
    } else if (next.total > 100) {
      reward = 50 + (next.total - 100) * 2;
    }
    prev.push({
      ...next,
      reward,
    });
    return prev;
  }, []);
};
