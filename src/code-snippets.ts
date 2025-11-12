// Template literal tag functions for syntax highlighting in editor
const javascript = (strings: TemplateStringsArray, ...values: any[]) => 
  String.raw({ raw: strings }, ...values);
const typescript = javascript;
const python = javascript;
const markdown = javascript;
const json = javascript;
const html = javascript;
const css = javascript;
const bash = javascript;
const yaml = javascript;
const rust = javascript;
const go = javascript;
const java = javascript;
const c = javascript;
const cpp = javascript;

export const CODE_SNIPPETS: Record<string, string> = {
  javascript: javascript`
const greeting = "Hello, World!";
console.log(greeting);

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, my name is \${this.name}\`;
  }
}

const user = { name: "Alice", age: 30 };
const { name, age } = user;
console.log(name, age);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});
promise.then(result => console.log(result));

const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
console.log(newArr);

const multiply = (a, b) => a * b;
const result = multiply(5, 3);
console.log(result);

const fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => console.log(fruit));

try {
  JSON.parse("invalid json");
} catch (error) {
  console.error("Parse error:", error.message);
}

const sum = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
console.log(sum);

const isEven = num => num % 2 === 0;
const evens = [1, 2, 3, 4].filter(isEven);
  `,
  typescript: typescript`
interface User {
  name: string;
  age: number;
}

const user: User = { name: "Alice", age: 30 };

function greet<T extends string>(name: T): string {
  return \`Hello, \${name}!\`;
}

type Status = "pending" | "success" | "error";
const status: Status = "success";

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
const myColor: Color = Color.Red;

interface ApiResponse<T> {
  data: T;
  status: number;
}
const response: ApiResponse<string> = { data: "ok", status: 200 };

class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

function isString(value: unknown): value is string {
  return typeof value === "string";
}

const tuple: [string, number] = ["Alice", 30];
const [name, age] = tuple;

interface Shape {
  area(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  area() { 
    return Math.PI * this.radius ** 2; 
  }
}
  `,
  python: python`
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]
print(squared)

class Dog:
    def __init__(self, name):
        self.name = name
    
    def bark(self):
        return f"{self.name} says woof!"

def greet(name: str) -> str:
    return f"Hello, {name}!"

print(greet("Alice"))

fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit.upper())

data = {"name": "Alice", "age": 30}
for key, value in data.items():
    print(f"{key}: {value}")

@decorator
def my_function():
    pass

numbers = [1, 2, 3, 4, 5]
evens = list(filter(lambda x: x % 2 == 0, numbers))

with open("file.txt", "r") as f:
    content = f.read()
    print(content)

try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")

def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b
  `,
  markdown: markdown`
# Welcome to Markdown

This is a **bold** statement and this is *italic*.

## Lists

- Item 1
- Item 2
- Item 3

1. First
2. Second
3. Third

### Code Example

\`\`\`javascript
const hello = "world";
\`\`\`

[Click here](https://example.com) to visit our website.

> This is a blockquote.
> It can span multiple lines.

| Name  | Age | City |
|-------|-----|------|
| Alice | 30  | NYC  |

![Alt text](image.jpg)

This is an image with description.

**Bold text**, *italic text*, and ~~strikethrough~~.

- [x] Completed task
- [ ] Pending task
- [ ] Another task
  `,
  json: json`
{
  "name": "Alice",
  "age": 30,
  "city": "New York",
  "isActive": true
}

{
  "users": [
    {"id": 1, "name": "Alice"},
    {"id": 2, "name": "Bob"},
    {"id": 3, "name": "Charlie"}
  ]
}

{
  "settings": {
    "theme": "dark",
    "language": "en",
    "notifications": true,
    "privacy": {
      "shareData": false
    }
  }
}

[
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry"
]

{
  "status": "success",
  "data": null,
  "count": 42,
  "metadata": {
    "version": "1.0"
  }
}
  `,
  html: html`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
  <p>Welcome to my website.</p>
</body>
</html>

<form action="/submit" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>
  <button type="submit">Submit</button>
</form>

<div class="container">
  <p>This is a paragraph with <strong>bold</strong> text.</p>
  <a href="#section">Click me</a>
</div>

<ul class="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<img src="photo.jpg" alt="A beautiful sunset">
<video controls width="640">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support video.
</video>
  `,
  css: css`
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 20px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
  
  .main-content {
    width: 100%;
  }
}

.button {
  background: linear-gradient(to right, #667eea, #764ba2);
  border-radius: 8px;
  padding: 10px 20px;
  color: white;
  border: none;
  cursor: pointer;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element {
  animation: fadeIn 1s ease-in;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 1rem;
}
  `,
  bash: bash`
#!/bin/bash
echo "Hello, World!"
date
whoami

for i in {1..5}; do
  echo "Number: $i"
done

if [ -f "file.txt" ]; then
  echo "File exists"
else
  echo "File not found"
fi

#!/bin/bash
files=$(ls -l)
echo "$files"

function greet() {
  echo "Hello, $1!"
}
greet "Alice"

while read line; do
  echo "Line: $line"
done < file.txt

#!/bin/bash
for file in *.txt; do
  echo "Processing $file"
  cat "$file"
done
  `,
  yaml: yaml`
name: My App
version: 1.0.0
author: Alice
dependencies:
  - react
  - typescript
  - zustand

server:
  host: localhost
  port: 3000
  ssl:
    enabled: true
    cert: /path/to/cert
    key: /path/to/key

users:
  - name: Alice
    role: admin
    email: alice@example.com
  - name: Bob
    role: user
    email: bob@example.com

env:
  NODE_ENV: production
  API_KEY: secret123
  DEBUG: false
  DATABASE_URL: postgres://localhost
  `,
  rust: rust`
fn main() {
    let x = 5;
    let y = 10;
    println!("Sum: {}", x + y);
}

struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn new(name: String, age: u32) -> Self {
        Person { name, age }
    }
    
    fn greet(&self) {
        println!("Hello, {}!", self.name);
    }
}

fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2),
    }
}

let numbers = vec![1, 2, 3, 4, 5];
let doubled: Vec<i32> = numbers.iter().map(|x| x * 2).collect();

fn add<T: std::ops::Add<Output = T>>(a: T, b: T) -> T {
    a + b
}
  `,
  go: go`
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}

func add(a, b int) int {
    return a + b
}

result := add(5, 3)

type Person struct {
    Name string
    Age  int
    City string
}

p := Person{Name: "Alice", Age: 30}

for i := 0; i < 5; i++ {
    fmt.Println(i)
}

func fibonacci(n int) int {
    if n <= 1 {
        return n
    }
    return fibonacci(n-1) + fibonacci(n-2)
}
  `,
  java: java`
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}

public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() {
        return name;
    }
    
    public int getAge() {
        return age;
    }
}

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
numbers.stream()
       .map(n -> n * 2)
       .forEach(System.out::println);

public interface Drawable {
    void draw();
}
  `,
  c: c`
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int arr[] = {1, 2, 3, 4, 5};
for (int i = 0; i < 5; i++) {
    printf("%d\\n", arr[i]);
}

struct Point {
    int x;
    int y;
};

void printPoint(struct Point p) {
    printf("(%d, %d)\\n", p.x, p.y);
}
  `,
  cpp: cpp`
#include <iostream>
#include <vector>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}

class Rectangle {
public:
    int width, height;
    
    Rectangle(int w, int h) : width(w), height(h) {}
    
    int area() { 
        return width * height; 
    }
};

std::vector<int> numbers = {1, 2, 3, 4, 5};
for (auto num : numbers) {
    std::cout << num << std::endl;
}

template<typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}
  `,
};

function normalizeWhitespace(text: string): string {
  // Replace newlines and consecutive spaces with single space
  return text.replace(/\s+/g, ' ').trim();
}

export function normalizeLanguage(lang: string): string {
  const aliases: Record<string, string> = {
    js: 'javascript',
    ts: 'typescript',
    jsx: 'javascript',
    tsx: 'typescript',
    py: 'python',
    md: 'markdown',
    sh: 'bash',
    shell: 'bash',
    yml: 'yaml',
    rs: 'rust',
  };
  
  const normalized = lang.toLowerCase();
  return aliases[normalized] || normalized;
}

export function getRandomCodeSnippet(lang: string): string {
  const snippet = CODE_SNIPPETS[lang];
  if (!snippet) return "";
  return normalizeWhitespace(snippet);
}
