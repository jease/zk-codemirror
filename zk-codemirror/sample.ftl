<!--
example useless code to show Freemarker syntax highlighting
this is multiline comment
-->
    
<#macro join sequence separator>
    <#assign first="true"/>
    <#list sequence as entry><#if first=="true"><#assign first="false"/><#else>${separator} </#if>${entry}</#list>
</#macro>

Here is some text that isn't Freemarker.

Let's join a list <@join ["foo", "bar", "baz"] ", "/>

Some expressions: ${test} ${another?test?substring(0, 12)}

Use alternative directive syntax:
[#if user == "Big Joe"]
    Hello big ${user}
[/#if]
