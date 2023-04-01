def digital_root(n):
    n = str(n)
    x = 0

    while len(n) > 1:
        for y in range(0, len(n)):
            x += int(n[y])

        n = str(x)
        x = 0

    return int(n)