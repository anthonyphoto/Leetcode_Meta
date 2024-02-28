
function numSum(nums, k) {
    let left = 0; 
    let right = 0;

    let sum = 0;
    let cnt = 0;

    while (right < nums.length) {
        sum += nums[right];
        if (sum === k) {
            cnt++;
            right++;
        } else if (sum < k) {

            right++;
        } else {
            sum -= nums[left];

            left++;
        }
    }
    return cnt;
}