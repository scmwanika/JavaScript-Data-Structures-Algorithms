# add numbers
def add_numbers(num1, num2):
    return num1 + num2

# for loop


def add_elements(nums):
    total = 0
    for num in nums:
        total = total + num # total += num
    return total

def sum_elements(nums):
    # import math
    # return math.prod(nums)
    return sum(nums)



def create_new_list_to_append_and_pop_elements(nums):
    new_list = []  # new_list = list()
    for i in nums:
        new_list.append(i)
    return new_list.pop()


# print keys or values in a dictionary


def create_new_list_to_append_dict_values(dictionary):
    dict_values = []
    for i in dictionary.values():
        dict_values.append(i)
    return dict_values


# print keys or values in a dictionary


def create_new_list_to_append_dict_items(dictionary):
    dict_items = []
    for (k, v) in dictionary.items():
        dict_items.append([k, v])
    return dict_items


# print range


def create_new_list_to_append_elements_in_the_range(n):
    elements_in_range = []
    for i in range(n):
        elements_in_range.append(i)
    return elements_in_range


# print range len


# def forloop5(nums):
#     for i in range(len(nums)):
#         print(nums[i])


# # print filtered elements


# def forloop6(nums):
#     for i in nums[2:]:
#         print(i)


# print enumerate


def create_dict_items_of_Index_Value_pairs(nums):
    dict_items = []
    for (i, v) in enumerate(nums):
        dict_items.append({i: v})
    return dict_items

# print zip


def create_new_list_to_append_corresponding_indices_of_numbers_and_their_sum(nums1, nums2):
    add_corresponding_indices = []
    for (i, j) in zip(nums1, nums2):
        add_corresponding_indices.append([(i, j), i+j])
    return add_corresponding_indices


def create_dict_items_to_append_corresponding_name_and_height(names, heights):
    dict_items = []
    for (name, height) in zip(names, heights):
        dict_items.append({name: height})
    return dict_items

# def create_dict_items_to_append_corresponding_name_and_height(names, heights):
#     dict_items = {}  # dict_items = dict()
#     for (name, height) in zip(names, heights):
#         dict_items[name] = height
#     return dict_items


def dictionary_as_a_set_of_counters(word):
    dict_items = {}
    for c in word:
        if c not in dict_items:
            dict_items[c] = 1
        else:
            dict_items[c] += 1
    return dict_items


# def group_anagrams(strs):
#     dict_items = {}
#     for word in strs:
#         c = list(word).sort()  # to check

#         if word not in dict_items:
#             dict_items[c] = word
#         else:
#             dict_items[c].append(word)
#     return dict_items.values()


# sets


# substrings and subarrays


def contiguous_substrings(string):
    res = []
    for i in range(len(string)):
        for j in range(i+1, len(string)+1):
            res.append(string[i:j])
    return res


# subsequences and subsets


def subsequences(string):
    from itertools import combinations
    res = set()
    for i in range(1, len(string)+1):
        for j in combinations(string, i):
            res.add("".join(j))
    return sorted(res)


if __name__ == "__main__":
    print(add_numbers(4, 5))  # 9
    print(add_elements([1, 2, 3, 4, 5]))  # 15
    print(sum_elements([1, 2, 3, 4, 5]))  # 15
    print(create_new_list_to_append_and_pop_elements([1, 2, 3, 4, 5]))  # 5
    print(create_new_list_to_append_dict_values(
        {"name": "Mwanika", "age": 42}))  # ['Mwanika', 42]
    # [['name', 'Mwanika'], ['age', 42]]
    print(create_new_list_to_append_dict_items({"name": "Mwanika", "age": 42}))
    print(create_new_list_to_append_elements_in_the_range(4))  # [0, 1, 2, 3]
    # forloop5([4, 6, 7, 8, 10])
    # forloop6([4, 6, 7, 8, 10])
    # [{0: 4}, {1: 6}, {2: 7}, {3: 8}, {4: 10}]
    print(create_dict_items_of_Index_Value_pairs([4, 6, 7, 8, 10]))
    print(create_new_list_to_append_corresponding_indices_of_numbers_and_their_sum(
        [1, 2, 3], [0, 6, 8]))  # [[(1, 0), 1], [(2, 6), 8], [(3, 8), 11]]
    print(create_dict_items_to_append_corresponding_name_and_height(
        # [{'Mary': 180}, {'John': 165}, {'Emma': 170}]
        # {'Mary': 180, 'John': 165, 'Emma': 170}
        ["Mary", "John", "Emma"], [180, 165, 170]))
    print(dictionary_as_a_set_of_counters("Mwanika"))
    # print(group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
    print(contiguous_substrings("dog"))  # ['d', 'do', 'dog', 'o', 'og', 'g']
    print(subsequences("dog"))  # ['d', 'dg', 'do', 'dog', 'g', 'o', 'og']

    # def forloop9():
    # for i in range(3):
    #     for j in range(3):
    #         if i <= j:
    #             continue
    #         print(i, j)
    # forloop9()
