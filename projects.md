---
layout: index
title: Anthony F Cannistra | Projects
---

<h1> Recent Projects  <span style="font-size: 20px">(<i class="icon-briefcase"></i> = school, <i class="icon-home"></i> = personal)</span></h1>

{% for proj in site.projects %}
## {{ proj.name }}
<table>
	<tr>
		<td><b>Language:</b></td>
		<td valign="middle">{{ proj.language}}</td>
	</tr>
	<tr>
		<td><b>Purpose:</b></td>
		<td valign="middle">{{ proj.purpose | markdownify }}</td>
	</tr>
	<tr>
		<td><b>Outcome:</b></td>
		<td valign="middle">{{ proj.outcome | markdownify }}</td>
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


