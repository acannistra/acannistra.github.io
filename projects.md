---
layout: index
title: Anthony F Cannistra | Projects
projects:
  - name: "<i class='icon-briefcase'></i>Tufts Idea Exchange 2014"
    language: English
    purpose: | 
     The Tufts Idea Exchange is a TED-style forum in the spring of each academic year. Each year we invite undergraduates to apply to share their "big idea" with the campus in the form of an 8-minute presentation. We also invite a faculty member and some Tufts alumni/ae to share their experiences as well. As co-President this semester (along with sophomore (Kit McDonnell[https://www.facebook.com/kit.mcdonnell])), I am jointly responsible for leading the TEX team, a group of Tufts undergrads who read the 30-plus student applications, interview some, and select the 6 or 7 student speakers. We then coach those students for a month or so prior to the event to ensure their creative ideas are showcased brilliantly on stage in April. For more information, visit (tuftsedeaexchange.com)[http://www.tuftsideaexchange.com].
    outcome: |
     we're busily preparing for the event on April 9th, 2014.
    code: n/a
    completed: in progress!
  - name: "<i class='icon-briefcase'></i>TuftsLife v3"
    language: HTML/CSS/Python-Django
    purpose: |
     The Tufts University community has long relied upon a student-run web site known as (TuftsLife)[http://www.tuftslife.com], which is a portal for sharing events and classified listings pertinent to Tufts students. The site underwent a recent redesign that left the campus wanting, so myself and Tufts junior Tara Kola have undertaken the task of managing a team of ~10 excited Tufts students in the rebuilding of the site from the ground up. We hope to release TuftsLife v3 in the beginning of Fall 2014.
    outcome: |
     Project ongoing. 
    code: none available.
    completed: in progress
  - name: "<i class='icon-home'></i>TMC Trips Visualizer"
    language: HTML/CSS/Javascript
    purpose: |
     The Tufts Mountain Club is an awesome organization, and its members lead amazing trips all over New England. For my first two years at Tufts, though, the only way to find out what trips were happening was to go onto the [TMC Website](http://www.tuftsmountainclub.org/trips-2) and look at an ugly table. So I decided to do something about it and make a new interface. Unfortunately, due to changes in the API, the site currently needs some refactoring to get it up and running again, but all the code is available on GitHub.
    outcome: |
      I built a frontend and a small node.js backend. You can see all of the code and some documentation on [github](http://www.github.com/acannistra/trips).
    code: "[github](http://www.github.com/acannistra/trips)"
    completed: Spring 2013
  - name: |
     <i class='icon-briefcase'></i> Protein Function Prediction Research
    language: Python
    purpose: |
     My first foray into research combining my interests in Biology and Computer Science, this project is an ongoing attempt to improve the accuracy of computational protein function prediction based on work Tufts University computer science Profs. [Ben Hescott](http://www.cs.tufts.edu/~hescott) and [Lenore Cowen](http://www.cs.tufts.edu/~cowen) have been doing over the past year. Hescott and Cowen have developed a protein-protein interaction network distance metric called the Diffusion State Distance (paper forthcoming, PLOS ONE Fall 2013). The DSD metric has produced good results when operating on networks of *physical* protein-protein interaction data. My charge for the summer, together with Tufts senior Inbar Fried, was to integrate *genetic* protein-protein interaction data. 
    outcome: | 
     Since this research has not yet been published, I'm not at liberty to discuss results. However, they are quite interesting. Look for a potential presentation at [RECOMB 2014](http://www.compbio.cmu.edu/recomb/). 
    code: not available (yet)
    completed: ongoing
  - name: "<i class='icon-home'></i> TuftsText / CollegiateText"
    language: Python/HTML/CSS/SQL
    purpose: |
     When I arrived at Tufts, I was a frequent user of a textbook price comparison service called [GetchaBooks](http://www.getchabooks.com), created by Tufts students. This winter, when the students who created the website decided to take it down, my friend [James](http://www.facebook.com/james.roseman) and I picked up where they left off.
    outcome: |
      The GetchaBooks people made their code open-source, so we simply had to install their Git repo onto a properly-configured server, change some CSS colors, and behold: [TuftsText](http://www.tuftstext.com). The site worked great during the Spring semester, and drove quite a bit of traffic. However, once Tufts changed the software used by the university to manage courses and registration, much of the infrastructure upon which GetchaBooks/TuftsText is based no longer works. So, James and I are working on rebuilding TuftsText from the ground up and are planning on expanding to two other area universities, Bentley and Brandeis. 
    code: not yet available
    completed: Spring 2013
  - name: "<i class='icon-home'></i> This website!"
    language: HTML/CSS/[Jekyll](http://jekyllrb.com)
    purpose: |
      To create a simple personal website that can be easily and quickly updated. I was looking for a nice way to be able to write my site in [markdown](http://daringfireball.net/projects/markdown/).
    outcome: | 
      The site is very much a work in progress, but the implementation is quite enjoyable to work with. My desire for a clean Markdown-based site and a database-free content management system brought me to [GitHub Pages](http://pages.github.com). GitHub runs the markdown through Jekyll, which supports the [Liquid Template Engine](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers), which is small and simple to use. All of the projects on this page, for example, are encoded in [YAML](http://www.yaml.org/spec/1.2/spec.html) format, parsed by Liquid into the tables you see.
    code: available on my [GitHub page](http://www.github.com/acannistra).
    completed: Spring 2013
  - name: "<i class='icon-briefcase'></i> COMP105: Standard ML Type Inference"
    language: "Standard ML"
    purpose: |
     To add a SML-like type inference system to a "micro-ML" (type-free) interpreter
    outcome: |
      This project was completed by using a <b>constraint-solving</b> inference algorithm, where type expressions are distilled into <b>type constraints</b> (similar in style to a CNF boolean solver), and solved.<p>In short, we were able to take a non-typed language and convert it to a strictly typed one via the addition of a type inference system. </p>
    code: |
      To maintain academic integrity, this code will not be shared.
    completed: "Spring 2013"
  - name: "<i class='icon-briefcase'></i> COMP167: SNP Calling Analysis"
    language: "Python"
    purpose: |
      To analyze the results of a SNP-calling program, in the form of <code>.vcf</code> files, and compute statistics about the data. The data were also compared against a database of known SNPs (dbSNP, csomes 18-21) to find "novel" variants.
    outcome: |
      Determined:
      			<ul>
      				<li>Novel SNPs, passing</li>
      				<li>Novel SNPs, filtered</li>
      				<li>Known SNPs, passing</li>
      				<li>Known SNPs, filtered</li>
      				<li>Ti/Tv ratios for the above sets</li>
      				<li>% passing SNPs that are known</li>
      			</ul>
      		Among other statistics.
    code: |
      To maintain academic integrity, this code will not be shared.
    completed: Spring 2013
  - name: "<i class='icon-briefcase'></i> COMP167: A Simple _De Novo_ Genome Assembler"
    language: C++
    purpose: |
      Given two <code>fastq</code> files, each containing reads from a genome fragment, we set out to assemble as much of the original sequence as possible using pairwise overlaps and a <a href="http://en.wikipedia.org/wiki/De_Bruijn_graph">De Brujin</a> <a href="http://www.nature.com/nbt/journal/v29/n11/full/nbt.2023.html">assembly strategy.</a>
    outcome: |
      The program was quite fast, due to the De Brujin implementation. Finding overlapping reads was unnecessary, as the graph ensured read overlap as it was built.
    code: To maintain academic integrity, the code will not be shared.
    completed: Spring 2013

---

<h1> Recent Projects  <span style="font-size: 20px">(<i class="icon-briefcase"></i> = school, <i class="icon-home"></i> = personal)</span></h1>

{% for proj in page.projects %}
## {{ proj.name }}
<table>
	<tr>
		<td><b>Language:</b></td>
		<td valign="middle">{{ proj.language}}</td>
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
		<td>{{ proj.code | markdownify }}</td>
	</tr>
	<tr>
		<td><b>Completed:</b></td>
		<td>{{ proj.completed | markdownify }}</td>
	</tr>
</table>
{% endfor %} 


