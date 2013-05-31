---
layout: index
title: Anthony F. Cannistra | Courses
courses:
  - name: Calculus II
    num: MATH12
    prof: Prof. Jens Christensen
    sem: Fall 2011
    topics: foo bar
    ta?: false
  - name: Introduction to Computer Science
    num: COMP11
    prof: Prof. Ben Hescott 
    sem: Fall 2011
    topics: foo bar
    ta?: true
  - name: Introduction to Linguistics
    num: PHIL15
    prof: Prof. Ariel Goldberg
    sem: Fall 2011
    topics: foo bar
    ta?: false
  - name: History of Blues
    num: MUS41
    prof: Prof. Michael Ullman
    sem: Fall 2011
    topics: foo bar
    ta?: false
  - name: Organisms and Populations with Laboratory
    num: BIO14
    prof: Prof. Frances Chew, Prof. George Ellmore, Prof. Harry Bernheim
    topics: foo bar
    sem: Spring 2012
    ta?: false
  - name: Data Structures
    num: COMP15
    prof: Prof. Sam Guyer
    topics: |
      Project Based. Abstract Data Types: Map, Set, Sequence. Big-O Runtime, Cost Analysis. Software development; large-scale software projects.
    sem: Spring 2012
    ta?: false
  - name: Discrete Mathematics 
    num: MATH22
    prof: Prof. Richard Weiss
    topics: | 
      Proof-based Number Theory, Set Theory, and Graph Theory. Various written proof strategies and techniques.
    sem: S12
    ta?: false
  - name: A Toolkit For Thinking
    prof: Prof. Daniel Dennett
    sem: Spring 2012
    topics: |
      Seminar class for the purpose of reviewing an upcoming work of Dennett.
    ta?: false
    num: PHIL91
  - name: American Wilderness
    prof: Andrew Turchon
    topics: | 
      Evolution of the concept of Wilderness from early history to today. American conservation attitudes and movements. Study of law, literature, and other primary sources. Projects, papers. _A Tufts Experimental College course._
    sem: Spring 2012
    ta?: false
    num: EXP31
  

---

## Courses I've Taken

<table>
  <tr>
    <td><b>Course #</b></td>
    <td><b>Course Name</b></td>
    <td><b>Professor</b></td>
  </tr>

{% for course in page.courses %}
  <tr>
    <td>{{ course.sem }}<td>
    <td>{{ course.num   }}</td>
    <td><b>{{ course.name  }}</b></td>
    <td>{{ course.prof  }}</td>
  </tr>
{% endfor %}
</table>





