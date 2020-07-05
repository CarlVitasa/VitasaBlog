---
layout: default-layout.njk
title: About
---

# About

Value type: contains their data 
- e.g. `int`, `float`, `bool`, `enum`, `struct`
- cannot be null 
- each assignment makes a copy of the variable
```csharp
using System;

  class Application {
    public static void Main() {
		string personA = "Carl";
		string personB = personA;
		personB = "Brennan";
		
		Console.WriteLine(personA); // output: Carl
	}
  }
```