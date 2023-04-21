import turtle
import sys

# initialize turtle
t = turtle.Turtle()
t.speed(0)

# define the transition function for the TM


def transition(state, symbol):
    if "q0" in state:
        if symbol == "0":
            return "q1/x/R"
        elif symbol == "1":
            return "q3/y/R"
    elif state == "q1":
        if symbol == "0":
            return "q0/0/L"
        elif symbol == "1":
            return "q2/y/L"
    elif state == "q2":
        if symbol == "0":
            return "q3/x/R"
        elif symbol == "1":
            return "q1/y/L"
    elif state == "q3":
        if symbol == "0":
            return "q2/x/L"
        elif symbol == "1":
            return "q0/1/L"

# define the TM function


def turing_machine(input_string):
    tape = ["_"] * 100 + list(input_string) + ["_"] * 100
    head_position = 100
    current_state = "q0"

    # run the TM until it halts
    while True:
        # draw the tape and head position
        t.penup()
        t.goto(head_position * 10, 0)
        t.pendown()
        t.write(tape[head_position])

        # get the next transition based on the current state and symbol
        symbol = tape[head_position]
        data = transition(current_state, symbol)
        next_state = data.split('/')[0]
        write_symbol = data.split('/')[1]
        move_direction = data.split('/')[2]

        # write the new symbol to the tape
        tape[head_position] = write_symbol

        # move the head position based on the move direction
        if move_direction == "R":
            head_position += 1
        elif move_direction == "L":
            head_position -= 1

        # update the current state
        current_state = next_state

        # check if the TM has reached an accepting or rejecting state
        if current_state == "q4":
            t.penup()
            t.goto(0, -50)
            t.pendown()
            t.write("Accepted")
            break
        elif current_state == "q5":
            t.penup()
            t.goto(0, -50)
            t.pendown()
            t.write("Rejected")
            break


# run the TM function with some input strings
turing_machine("0101")
t.clear()
turing_machine("10101")
t.clear()
turing_machine("1111")
t.clear()
turing_machine("000")
t.clear()
turing_machine("011101")
t.clear()

turtle.done()
