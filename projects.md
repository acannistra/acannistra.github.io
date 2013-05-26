---
layout: index
title: Anthony F Cannistra | Projects
projects:
  - name: "<img src='img/home.png' width='20px' height='20px'/> This website!"
    language: HTML/CSS/[Jekyll](http://jekyllrb.com)
    purpose: |
      To create a simple personal website that can be easily and quickly updated. I was looking for a nice way to be able to write my site in [markdown](http://daringfireball.net/projects/markdown/).
    outcome: | 
      The site is very much a work in progress, but the implementation is quite enjoyable to work with. My desire for a clean Markdown-based site and a database-free content management system brought me to [GitHub Pages](http://pages.github.com). GitHub runs the markdown through Jekyll, which supports the [Liquid Template Engine](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers), which is small and simple to use. All of the projects on this page, for example, are encoded in [YAML](http://www.yaml.org/spec/1.2/spec.html) format, parsed by Liquid into the tables you see.
    code: available on my github page ( @acannistra )
  - name: "<img src='img/school.png' width='20px' height='20px'/> COMP105: Standard ML Type Inference"
    language: "Standard ML"
    purpose: |
     To add a SML-like type inference system to a "micro-ML" (type-free) interpreter
    outcome: |
      This project was completed by using a <b>constraint-solving</b> inference algorithm, where type expressions are distilled into <b>type constraints</b> (similar in style to a CNF boolean solver), and solved.<p>In short, we were able to take a non-typed language and convert it to a strictly typed one via the addition of a type inference system. </p>
    code: |
      To maintain academic integrity, this code will not be shared.
    completed: "Spring 2013"
  - name: "COMP105: Standard ML Type Inference"
    language: "Standard ML"
    purpose: |
      foo text
      more foo text
    outcome: |
      Here is the outcome
      Here is some more
    code: |
      Here is info about code
    completed: "Info here"
---

<h1> Recent Projects  <span style="margin-left: auto; margin-right:auto; font-size: 15px">(<img width="15px" height="15px" src="img/school.png" /> = school, <img width="15px" height="15px" src="img/home.png" /> = personal)</span></h1>

{% for proj in page.projects %}
## {{ proj.name }}
<table>
	<tr>
		<td><b>Language:</b></td>
		<td>{{ proj.language | markdownify }}</td>
	</tr>
	<tr>
		<td><b>Purpose:</b></td>
		<td>{{ proj.purpose | markdownify }}</td>
	</tr>
	<tr>
		<td><b>Outcome:</b></td>
		<td>{{ proj.outcome | markdownify }}</td>
	</tr>
	<tr>
		<td><b>Code:</b></td>
		<td>{{ proj.code }}</td>
	</tr>
	<tr>
		<td><b>Completed:</b></td>
		<td>{{ proj.completed }}</td>
	</tr>
</table>
{% endfor %} 


{% comment %}
<h2>COMP105: Standard ML Type Inference</h2>
<table class="table">
	<tr>
		<td><b>Language:</b></td><td>Standard ML</td>
	</tr>
		<td><b>Purpose:</b></td><td>To add a SML-like type inference system to a "micro-ML" (type-free) interpreter</td>
	<tr>
		<td><p><b>Outcome:</b></td><td>This project was completed by using a <b>constraint-solving</b> inference algorithm, where type expressions are distilled into <b>type constraints</b> (similar in style to a CNF boolean solver), and solved. <p>
		<p>In short, we were able to take a non-typed language and convert it to a strictly typed one via the addition of a type inference system. </p>
		</td>
	</tr>
		<td><b>Code</b></td><td>To maintain academic integrity, this code will not be shared.</td>
	<tr>
	</tr>
	<tr>
		<td><b>Completed:</b></td><td>Spring 2013</td>
	</tr>
</table>

<h2> COMP105: Functional Programming in ML</h2>
<table class="table" id="p1">
	<tr>
		<td><b>Language: </b></td>
		<td> Standard ML</td>
	</tr>
	<tr>
		<td><b>Purpose:</b></td><td> To explore functional programming paradigms in the ML programming language.</td>
	</tr>
	<tr>
		<td><b>Outcome: </b></td><td>Produced the following functions, written in ML (the "easy" part):
			<ul>
				<li> Compound: <code>('a * 'a -> 'a) -> int -> 'a -> 'a </code></li>
				<li> Exp (curried): <code>int -> int -> int</code> </li>
				<li> Fibonacci without <code>if</code></li>
				<li> Reverse (a list) with <code>foldl</code> or <code>foldr</code></li>
				<li> Zip: <code>'a list * 'b list -> ('a * 'b) list</code> </li>
				<li> Unzip: <code> ('a * 'b) list -> 'a list * 'b list</code>
				<li> Pairfoldr: <code>('a * 'b * 'c -> 'c) -> 'c -> 'a list * 'b list -> 'c</code></li>
			</ul>
		And implemented a series of <i>algebraic data types</i>:
			<ul>
				<li>A Binary Search Tree</li>
				<li>Polymorphic Sets</li>
				<li>Sequence with constant-time append</li>
				<li>A list with finger (an immutable and persistent alternative to linked lists)</li>
			</ul>
		Finally, we altered the interpreter for SML to improve the efficiency of <code>lambda</code> evaluation by only storing variables free in the <code>lambda</code> expression.
		</td>
	</tr>
	<tr>
		<td><b>Code: </b></td><td>To maintain academic integrity, this code will not be shared</td>
	</tr>
	<tr>
		<td><b>Completed: </b></td><td>Spring 2013</td>
	</tr>

	</table>

<h2> COMP167: SNP Calling Analysis </h2>
<table class="table">
	<tr>
		<td><b>Language:</b></td><td>Python</td>
	</tr>
		<td><b>Purpose:</b></td><td>To analyze the results of a SNP-calling program, in the form of <code>.vcf</code> files, and compute statistics about the data. The data were also compared against a database of known SNPs (dbSNP, csomes 18-21) to find "novel" variants. </td>
	<tr>
		<td><b>Outcome:</b></td><td>Determined:
			<ul>
				<li>Novel SNPs, passing</li>
				<li>Novel SNPs, filtered</li>
				<li>Known SNPs, passing</li>
				<li>Known SNPs, filtered</li>	
				<li>Ti/Tv ratios for the above sets</li>
				<li>% passing SNPs that are known</	li>
			</ul>
		Among other statistics.
		</td>
	</tr>
		<td><b>Code</b></td><td>To maintain the academic integrity, this code will not be shared.</td>
	<tr>
	</tr>
	<tr>
		<td><b>Completed:</b></td><td>Spring 2013</td>
	</tr>
</table>
{% endcomment %}