def parse_operator(number, parse=None):

    if type(parse) == str:
        parse = parse.split(sep="|")
        parse[0] = int(parse[0])
        return {
            "+": lambda x: number + x,
            "-": lambda x: number - x,
            "*": lambda x: number * x,
            "/": lambda x: number // x
        }[parse[1]](parse[0])
    elif parse is None:
        return number


def zero(parse=None): return parse_operator(0, parse)
def one(parse=None): return parse_operator(1, parse)
def two(parse=None): return parse_operator(2, parse)
def three(parse=None): return parse_operator(3, parse)
def four(parse=None): return parse_operator(4, parse)
def five(parse=None): return parse_operator(5, parse)
def six(parse=None): return parse_operator(6, parse)
def seven(parse=None): return parse_operator(7, parse)
def eight(parse=None): return parse_operator(8, parse)
def nine(parse=None): return parse_operator(9, parse)


def plus(n):
    return f"{n}|+"


def minus(n):
    return f"{n}|-"


def times(n):
    return f"{n}|*"


def divided_by(n):
    return f"{n}|/"