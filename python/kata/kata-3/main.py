def sort_array(source_array):
    
    if source_array == []:
        return []

    odds = []
    evens = []
    pos = []

    for n in range(0, len(source_array)):
        if source_array[n] % 2 == 0:
            evens.append(source_array[n])
            pos.append(n)
            continue
        odds.append(source_array[n])

    odds.sort()

    n = 0
    for even in evens:
        odds.insert(pos[n], even)
        n += 1

    return odds