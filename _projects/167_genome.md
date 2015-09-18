---
name: "<i class='icon-briefcase'></i> COMP167: A Simple _De Novo_ Genome Assembler"
language: C++
purpose: |
  Given two <code>fastq</code> files, each containing reads from a genome fragment, we set out to assemble as much of the original sequence as possible using pairwise overlaps and a <a href="http://en.wikipedia.org/wiki/De_Bruijn_graph">De Brujin</a> <a href="http://www.nature.com/nbt/journal/v29/n11/full/nbt.2023.html">assembly strategy.</a>
outcome: |
  The program was quite fast, due to the De Brujin implementation. Finding overlapping reads was unnecessary, as the graph ensured read overlap as it was built.
code: To maintain academic integrity, the code will not be shared.
completed: Spring 2013

---