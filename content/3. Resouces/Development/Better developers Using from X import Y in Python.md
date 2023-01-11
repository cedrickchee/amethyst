Title: "\[Better Developers\] Using 'From X Import Y' in Python"
Author: [[Reuven Lerner]]
From: 

## Highlights:

Is a variation on "import" that is commonly used, which looks like this:
    from X import Y

The idea is pretty simple: When you say
    import foobar

you're creating a variable "foobar" in the current namespace. That variable is a module, whose attributes are the global variables created in the module's file

Whether you find it aesthetically ugly, or annoying to type, or confusing, or if you just want to put it in the current namespace, you can do that with:
    from foobar import hello

Or if you want both of them, you can say
    from foobar import hello, x

Once you have done this, the names "hello" and "x" are defined in your current namespace, and you can use them to access the module's attributes

Note that I keep saying, "the current namespace." That's because "import", like "def", is a way to define a variable. When you use "def", you're both creating a function object and setting a variable (the function name) to point to that function object. And when you use "import", you're both creating a module object, and setting a variable (the module name) to point to that module object.

But all variables can be global or local -- and modules are no different.

I should note that while you can use an "import" statement anywhere, it's pretty rare in my experience to have it anywhere but at the global scope

So: "from-import" loads the entire module, and puts the module in sys.modules. It then creates aliases to the specified names in the local namespace.

And if you're using "from-import" because you want to save memory, or don't want to load an entire module, that's obviously bad news.

When you say "from import *", you're saying that it would be totally OK for the module's variables to overwrite the variables that you have defined in the current namespace

For starters, "from-import" ignores names that start with an underscore (_) character

If I want, I can also define the variable __all__, a list of strings indicating which names should be exported when you use a wildcard