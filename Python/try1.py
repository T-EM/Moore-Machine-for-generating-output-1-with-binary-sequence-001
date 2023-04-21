class MooreMachine:
    def __init__(self, ip):
        self.str = ip
        self.q1()
        # print(self.str)
        # self.pop()
        # print(self.str)

    def q1(self):
        if self.str[0] == '0':
            self.pop()
            self.q2()
        elif self.str[0] == '1':
            self.pop()
            self.q5()
        else:
            return

    def q2(self):
        print("0")
        if self.str[0] == '0':
            self.pop()
            self.q3()
        elif self.str[0] == '1':
            self.pop()
            self.q5()
        else:
            return

    def q3(self):
        print("0")
        if self.str[0] == '0':
            self.pop()
            self.q5()
        elif self.str[0] == '1':
            self.pop()
            self.q4()
        else:
            return

    def q4(self):
        print("1")
        if self.str[0] == '0':
            self.pop()
            self.q2()
        elif self.str[0] == '1':
            self.pop()
            self.q5()
        else:
            return

    def q5(self):
        print("0")
        if self.str[0] == '0':
            self.pop()
            self.q2()
        elif self.str[0] == '1':
            self.pop()
            self.q5()
        else:
            return

    def pop(self):
        self.str = self.str[1:]


if __name__ == "__main__":
    try:
        ip = input("Enter the string: ")
        MooreMachine(ip)
    except IndexError:
        print("--END OF STRING--")
