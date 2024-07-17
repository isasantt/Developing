#include <cs50.h>
//teaching the compiler about get_string
#include <stdio.h>
//teaching the compiler about standard input/output
int main (void) {
    int x = get_int("What's x? ");
    int y = get_int("What's y? ");

    if (x<y) {
        printf("x is less than y\n")
    }
}
