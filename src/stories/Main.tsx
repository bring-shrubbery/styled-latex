import React from 'react';

import {Abstract} from '../components/abstract';
import {Article} from '../components/article';
import {Code} from '../components/code';
import {GlobalLatexStyles, LatexDefaultFonts} from '../components/global';
import {H1, H2, H3, H4} from '../components/headings';
import {Latex} from '../components/latex';
import {LatexContainer} from '../components/layout';
import {Link} from '../components/link';
import {Paragraph} from '../components/paragraph';
import {TableOfContents} from '../components/tableOfContents';
import {Theorem} from '../components/theorem';
import {Definition} from '../components/definition';
import {Lemma} from '../components/lemma';
import {Proof} from '../components/proof';
import {Sidenote, SidenoteReference} from '../components/sidenote';

export const MainExampleComponent = () => {
  return (
    <LatexContainer>
      <GlobalLatexStyles />
      <LatexDefaultFonts />
      <header>
        <H1>
          <Latex />
          .css
        </H1>
        <Paragraph author>
          Vincent Dörig <br />
          May 2020
        </Paragraph>
      </header>

      <Abstract>
        <H2>Abstract</H2>
        <Paragraph>
          {
            'This almost className-less CSS library turns your HTML document into a website that looks like a '
          }
          <Latex />
          {' document. Write semantic HTML, add '}
          <Code>
            {'<link rel="stylesheet" href="https://latex.now.sh/style.css">'}
          </Code>
          {' to the '}
          <Code className="language-html">{'<head>'}</Code>
          {
            ' of your project and you are good to go. The source code can be found on GitHub at '
          }
          <Link href="https://github.com/vincentdoerig/latex-css">
            https://github.com/vincentdoerig/latex-css
          </Link>
          .
        </Paragraph>
      </Abstract>

      <TableOfContents role="navigation" className="toc">
        <H2>Contents</H2>
        <ol>
          <li>
            <Link href="#getting-started">Getting Started</Link>
          </li>
          <li>
            <Link href="#className-based-elements">Class-based Elements</Link>
            <ol>
              <li>
                <Link href="#author-abstract">Author and Abstract</Link>
              </li>
              <li>
                <Link href="#tdpl">Theorems, Definitions and Proofs</Link>
                <ol>
                  <li>
                    <Link href="#proofs-theorems">Proofs & Theorems</Link>
                  </li>
                  <li>
                    <Link href="#lemmas">Lemmas</Link>
                  </li>
                  <li>
                    <Link href="#definitions">Definitions</Link>
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li>
            <Link href="#language-support">Language Support</Link>
          </li>
          <li>
            <Link href="#sidenotes">Sidenotes</Link>
          </li>
          <li>
            <Link href="#alternative-typeface">Alternative Typeface</Link>
          </li>
          <li>
            <Link href="#html-elements">HTML Elements</Link>
            <ol>
              <li>
                <Link href="#text-formatting">Text Formatting</Link>
              </li>
              <li>
                <Link href="#blockquotes">Blockquotes</Link>
              </li>
              <li>
                <Link href="#definition-lists">Definition Lists</Link>
              </li>
              <li>
                <Link href="#tables">Tables</Link>
              </li>
              <li>
                <Link href="#images">Images</Link>
              </li>
            </ol>
          </li>
          <li>
            <Link href="#miscellaneous">Miscellaneous</Link>
            <ol>
              <li>
                <Link href="#scroll-overflow">Scroll Overflow</Link>
              </li>
              <li>
                <Link href="#syntax-highlighting">Syntax Highlighting</Link>
              </li>
            </ol>
          </li>
        </ol>
      </TableOfContents>

      <main>
        <Article>
          <H2 id="getting-started">Getting Started</H2>
          <ul>
            <li>
              Add
              <Code className="language-html">
                {
                  '<link rel="stylesheet" href="https://latex.now.sh/style.css">'
                }
              </Code>{' '}
              to the <Code className="language-html">{'<head>'}</Code> of your
              website or install the package using{' '}
              <Code>npm install latex.css</Code>.
            </li>
            <li>
              (optional) Add any classes to elements described in the{' '}
              <Link href="#className-based-elements">next section</Link>.
            </li>
            <li>
              (optional) If you need support for <Latex /> math, add the
              following script to include{' '}
              <Link href="https://www.mathjax.org/">MathJax</Link>:
              <Code className="language-html" multiline>
                {
                  '<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>'
                }
              </Code>
            </li>
            <li>
              (optional) If you need syntax highlighting, add the following
              script to include <Link href="https://prismjs.com/">Prism</Link>{' '}
              and the Prism LaTeX stylesheet (or use any other):
              <Code className="language-html" multiline>
                {
                  '<link rel="stylesheet" href="https://latex.now.sh/prism/prism.css">\n<script src="https://cdn.jsdelivr.net/npm/prismjs/prism.min.js"></script>'
                }
              </Code>
            </li>
            <li>Done.</li>
          </ul>

          <H2 id="className-based-elements">Class-based Elements</H2>
          <H3 id="author-abstract">Author and Abstract</H3>
          <Paragraph>
            Use the following code to add an author and abstract to your
            document. It will look like <Link href="#top">this</Link>.
          </Paragraph>
          <Code className="language-html" multiline>
            {
              '<p className="author">John Doe <br> December 7, 2020</p>\n\n<div className="abstract">\n  <h2>Abstract</h2>\n  <p>...</p>\n</div>'
            }
          </Code>

          <H3 id="tdpl">Theorems, Definitions, Lemmas and Proofs</H3>
          <Paragraph>
            Theorems, definitions, lemmas and proofs are supported. Just wrap
            your content in a div and add the corresponding className to the
            element like in the following example.
          </Paragraph>

          <Code className="language-html" multiline>
            &lt;div className="theorem"&gt;...&lt;/div&gt; &lt;div
            className="definition"&gt;...&lt;/div&gt; &lt;div
            className="lemma"&gt;...&lt;/div&gt; &lt;div
            className="proof"&gt;...&lt;/div&gt;
          </Code>
          <Paragraph>Below are some examples.</Paragraph>
          <H4 id="proofs-theorems">Proofs & Theorems</H4>
          <Theorem>{'The real numbers $mathbb{R}$ are uncountable.'}</Theorem>
          <Proof>
            {
              'If $mathbb{R}$ is countable, then [0, 1] is countable as well. Hence there exists a map C from $mathbb{N}$ onto [0, 1] with $$C(n)=sum_{i=1}^{infty} c_{i}(n) 10^{-i}$$ where $c_{i}(n) in{0,1, ldots, 9},$ are the digits in decimal expansion. Now consider a real number $$x=sum_{i=1}^{infty} \bar{c}_{i} 10^{-i} in[0,1]$$ with $\bar{c}_{i} \neq c_{i}(i)$. Obviously $C(n) \neq x$ for all $n in mathbb{N} .$ Hence $C$ is not onto. A contradiction.'
            }
          </Proof>
          <Theorem>
            {
              'If $S$ is both countable and infinite, then there is a bijection between $S$ and $\boldsymbol{N}$ itself.'
            }
            <sup>
              <Link href="#fn1" id="ref1">
                1
              </Link>
            </sup>
          </Theorem>
          <Proof>
            For any $s \in S,$ we let $f(s)$ denote the value of $k$ such that
            $s$ is the $k$ the smallest element of $S .$ This map is well
            defined for any $s,$ because there are only finitely many natural
            numbers between 1 and $s .$ It is impossible for two different
            elements of $S$ to both be the $k$ the smallest element of $S$.
            Hence $f$ is one-to-one. Also, since $S$ is infinite, $f$ is onto.
          </Proof>
          <H4 id="lemmas">Lemmas</H4>
          <Lemma>
            An even number plus an even number results in an even number.
          </Lemma>
          <H4 id="definitions">Definitions</H4>
          <Definition>
            A definition is a a statement of the meaning of a word or word group
            or a sign or symbol.
            <sup>
              <Link href="#fn2" id="ref2">
                2
              </Link>
            </sup>
          </Definition>

          <H2 id="language-support">Language Support</H2>
          <Paragraph>
            The labels of theorems, definitions, lemmas and proofs can be
            changed to other
            <Link href="https://github.com/vincentdoerig/latex-css/tree/master/lang">
              supported language
            </Link>
            by including the following snippet, linking to the desired language
            in addition to the main CSS file.
          </Paragraph>
          <Code className="language-html" multiline>
            &lt;link rel="stylesheet" href="https://latex.now.sh/lang/es.css"
            /&gt; ... &lt;html lang="es"&gt;
          </Code>
          <Paragraph>
            Take a peek at the{' '}
            <Link href="/languages">language support demo</Link> to see how the
            labels of the different languages change.
          </Paragraph>

          <H2 id="sidenotes">Sidenotes</H2>
          <Paragraph>
            Sidenotes can be used as an alternative to footnotes, where the user
            does not have to jump to the bottom of the page to read it. On
            mobile, click the superscript to reveal the note
            <SidenoteReference id="sn-1" />
            <Sidenote position="right">
              Yay, sidenotes!. If you are on mobile, I will appear inline. If
              you are using a larger screen, the sidenote will appear to the
              right of the text
            </Sidenote>
            .
          </Paragraph>

          <Paragraph>
            Sidenotes do need a little bit of setup, they are made up of a
            label, an invisible checkbox on top of the number and a span with
            the text inside. The superscript is set automatically and
            incremented using CSS when the checkbox has a className of{' '}
            <Code>sidenote-number</Code>.
          </Paragraph>
          <Code className="language-html" multiline>
            {
              '&lt;label for="sn-1" className="sidenote-toggle sidenote-number"&gt;&lt;/label&gt; &lt;input type="checkbox" id="sn-1" className="sidenote-toggle" /&gt; &lt;span className="sidenote"&gt;&lt;!-- sidenote content --&gt;&lt;/span&gt;'
            }
          </Code>
          <Paragraph>
            If you do not need superscripted numbers, you can opt out of the{' '}
            <Code>sidenote-number</Code> className and the sidenote will not
            have a number assigned. On a smaller screen, you will need to add a
            symbol inside the <Code>label</Code> for the user to click on.{' '}
            <label htmlFor="sn-plus" className="sidenote-toggle">
              ⊕
            </label>
            <input type="checkbox" id="sn-plus" className="sidenote-toggle" />
            <span className="sidenote">
              This is a sidenote without a number.
            </span>
          </Paragraph>
          <Paragraph>
            The snippet for a sidenote without a number is very similar:
          </Paragraph>
          <Code className="language-html" multiline>
            {
              '&lt;label for="sn-anything" className="sidenote-toggle"&gt;⊕&lt;/label&gt; &lt;input type="checkbox" id="sn-anything" className="sidenote-toggle" /&gt; &lt;span className="sidenote"&gt;&lt;!-- sidenote content --&gt;&lt;/span&gt;'
            }
          </Code>
          <label htmlFor="sn-plus" className="sidenote-toggle">
            <Link href="#sn-plus-content">⊕</Link>
          </label>
          <input type="checkbox" id="sn-plus" className="sidenote-toggle" />
          <span className="sidenote" id="sn-plus-content">
            This is a sidenote without a number.
          </span>
          <Paragraph>
            Add a className of <Code>left</Code> to the span with the{' '}
            <Code>sidenote</Code> className to make the note appear on the left
            side of the page on instead of right.
          </Paragraph>
          <Paragraph>
            The symbol you could use to indicate a sidenote is up to you. What
            about this notebook.
            <label htmlFor="sn-symbol" className="sidenote-toggle">
              📝
            </label>
            <input type="checkbox" id="sn-symbol" className="sidenote-toggle" />
            <span className="sidenote left">
              A notebook indicating a note. Aha.
              <br />
              (if on a large screen, resize to mobile to see the emoji)
            </span>
          </Paragraph>
          {/* <blockquote>
            You could also have sidenotes inside blockquotes just like this one
            <label for="sn-quote" className="sidenote-toggle">🔖</label>
            <input type="checkbox" id="sn-quote" className="sidenote-toggle" />
            <span className="sidenote">Hello there!</span>.
          </blockquote> */}

          <H2 id="alternative-typeface">Alternative Typeface</H2>
          <Paragraph>
            <Latex /> .css uses Latin Modern by default. If you don't like this
            typeface (hard to read, too thin, etc.), you can switch to the{' '}
            <Link href="https://github.com/alerque/libertinus">
              <Code>Libertinus</Code>
            </Link>{' '}
            font family by adding a className of <Code>libertinus</Code> to the{' '}
            <Code className="language-html">&lt;body&gt;</Code> tag. Click the
            button below to switch between Latin Modern and Libertinus.
          </Paragraph>

          <button id="typeface-toggle">
            Current typeface: <span id="typeface">Latin Modern</span>
          </button>

          <H2 id="html-elements">HTML Elements</H2>
          <Paragraph>
            For a preview of all HTML elements with LaTeX.css, check out the
            <Link href="/elements">HTML5 elements test page</Link>.
          </Paragraph>

          <H3 id="text-formatting">Text Formatting</H3>
          <Paragraph>
            This sentence is <b>bold</b>. If you like semantics, you might go
            with
            <strong>strong</strong> or <em>emphasized</em> text. If not,
            <i>italic</i> is still around. <small>Small</small> text is for fine
            print. Your copy can also be <sub>subscripted</sub> and
            <sup>superscripted</sup>, <ins>inserted</ins>, <del>deleted</del>,
            or
            <mark>highlighted</mark>. You would use a
            <Link href="#!">hyperlink</Link> to go to a new page. Keyboard input
            elements like <kbd>Cmd</kbd> + <kbd>Shift</kbd>
            are used to display textual user input.
          </Paragraph>

          <H3 id="blockquotes">Blockquotes</H3>
          <blockquote>
            Give me six hours to chop down a tree and I will spend the first
            four sharpening the axe.
            <cite>— Abraham Lincoln</cite>
          </blockquote>

          <H3 id="definition-lists">Definition Lists</H3>
          <dl>
            <dt>Definition Title One</dt>
            <dd>First definition description</dd>
            <dt>Binomial theorem</dt>
            <dd>
              {
                '$$(x+y)^{n}=sum_{(k = 0)}^{n}left(\begin{array} {l}n \\ kend{array}\right) x^{n - k} y^{k}=sum_{(k = 0)}^{n}left(\begin{array} {l}n \\ kend{array}\right) x^{k} y^{n - k}$$'
              }
            </dd>
          </dl>

          <H3 id="tables">Tables</H3>
          <table>
            <caption>A sample table with a descriptive caption.</caption>
            <thead>
              <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Footer 1</th>
                <th>Footer 2</th>
                <th>Footer 3</th>
              </tr>
            </tfoot>
            <tbody>
              <tr>
                <td>Description 1</td>
                <td>Description 2</td>
                <td>Description 3</td>
              </tr>
              <tr>
                <td>Description 1</td>
                <td>Description 2</td>
                <td>Description 3</td>
              </tr>
              <tr>
                <td>Description 1</td>
                <td>Description 2</td>
                <td>Description 3</td>
              </tr>
            </tbody>
          </table>

          <table>
            <caption>
              Example table taken from{' '}
              <Link href="https://texdoc.net/texmf-dist/doc/latex/booktabs/booktabs.pdf">
                this paper
              </Link>{' '}
              on how to produce quality tables with LaTeX.
            </caption>
            <thead>
              <tr>
                <th colSpan={2} scope="col">
                  Item
                </th>
              </tr>
              <tr>
                <th>Animal</th>
                <th>Description</th>
                <th>Price ($)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gnat</td>
                <td>per gram</td>
                <td>13.65</td>
              </tr>
              <tr>
                <td>Gnu</td>
                <td>stuffed</td>
                <td>92.50</td>
              </tr>
              <tr>
                <td>Emu</td>
                <td>stuffed</td>
                <td>33.33</td>
              </tr>
              <tr>
                <td>Armadillo</td>
                <td>frozen</td>
                <td>8.99</td>
              </tr>
            </tbody>
          </table>

          <div className="scroll-wrapper">
            <table>
              <caption>Color names and values.</caption>
              <tbody>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">HEX</th>
                  <th scope="col">HSL</th>
                  <th scope="col">RGB</th>
                </tr>
                <tr>
                  <th scope="row" style={{color: 'teal'}}>
                    Teal
                  </th>
                  <td>
                    <Code>#008080</Code>
                  </td>
                  <td>
                    <Code>hsl(180, 100%, 25%)</Code>
                  </td>
                  <td>
                    <Code>rgb(0, 128, 128)</Code>
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{color: 'goldenrod'}}>
                    Goldenrod
                  </th>
                  <td>
                    <Code>#daa520</Code>
                  </td>
                  <td>
                    <Code>hsl(43, 74%, 49%)</Code>
                  </td>
                  <td>
                    <Code>rgb(218, 165, 32)</Code>
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{color: 'cornflowerblue'}}>
                    Cornflowerblue
                  </th>
                  <td>
                    <Code>#6495ed</Code>
                  </td>
                  <td>
                    <Code>hsl(219, 79%, 66%)</Code>
                  </td>
                  <td>
                    <Code>rgb(100, 149, 237)</Code>
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{color: 'lightcoral'}}>
                    Lightcoral
                  </th>
                  <td>
                    <Code>#f08080</Code>
                  </td>
                  <td>
                    <Code>hsl(0, 79%, 72%)</Code>
                  </td>
                  <td>
                    <Code>rgb(240, 128, 128)</Code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <H3 id="images">Images</H3>
          <figure>
            <img
              src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?auto=format&fit=crop&w=1000&q=80"
              loading="lazy"
              alt="Mountain landscape"
              width="600"
              height="400"
            />
            <figcaption>
              Mountain landscape by
              <Link href="https://unsplash.com/@heytowner">John Towner</Link>.
            </figcaption>
          </figure>

          <H2 id="miscellaneous">Miscellaneous</H2>

          <H3 id="scroll-overflow">Scroll Overflow</H3>
          <Paragraph>
            It is best to break up long equations into smaller parts, but when
            this isn't possible, consider wrapping the overflowing element with
            a className of <Code>scroll-overflow</Code> to allow scrolling on
            the x-axis. Large tables should also be wrapped with this className.
          </Paragraph>
          <Paragraph>
            Below is an example of a long equation with overflow scroll.
          </Paragraph>
          <div className="scroll-wrapper">
            {
              '$$(1+x)^{n}=1+n x+\frac{n(n - 1)} {2!} x^{2}+\frac{n(n - 1)(n - 2)} {3!} x^{3}+\frac{n(n - 1)(n - 2)(n - 3)} {4!} x^{4}+\frac{n(n - 1)(n - 2)(n - 3)(n - 4)} {5!} x^{5}+ldots$$'
            }
          </div>

          <H3 id="syntax-highlighting">Syntax Highlighting</H3>
          <Paragraph>
            If you need syntax highlighting for code, LaTeX.css provides a{' '}
            <Link href="https://prismjs.com/">PrismJS</Link> theme that
            immitates the{' '}
            <Link href="https://github.com/gpoore/minted">minted</Link> package
            for LaTeX. Add the following stylesheet and script:
          </Paragraph>
          <Code className="language-html" multiline>
            &lt;link rel="stylesheet"
            href="https://latex.now.sh/prism/prism.css"&gt; &lt;script
            src="https://cdn.jsdelivr.net/npm/prismjs/prism.min.js"&gt;&lt;/script&gt;
          </Code>
          <Paragraph>And use it like this:</Paragraph>
          <Code className="language-html" multiline>
            &lt;pre&gt; &lt;code className="language-html"&gt; &lt;!-- your HTML
            code snippet --&gt; &lt;/code&gt; &lt;/pre&gt;
          </Code>
          <Paragraph>
            Change which languages Prism highlights by customising the script{' '}
            <Link href="https://prismjs.com/download.html">here</Link>.
          </Paragraph>

          <div className="footnotes">
            <Paragraph id="fn1">
              1. From
              <Link href="https://www.math.brown.edu/~res/MFS/handout8.pdf">
                https://www.math.brown.edu/~res/MFS/handout8.pdf
              </Link>
              .
              <Link href="#ref1" title="Jump back to footnote 1 in the text.">
                ↩
              </Link>
            </Paragraph>
            <Paragraph id="fn2">
              2. “Definition.” Merriam-Webster.com Dictionary, Merriam-Webster,
              <Link href="https://www.merriam-webster.com/dictionary/definition">
                https://www.merriam-webster.com/dictionary/definition
              </Link>
              . Accessed 18 May. 2020.
              <Link href="#ref2" title="Jump back to footnote 2 in the text.">
                ↩
              </Link>
            </Paragraph>
          </div>
        </Article>
      </main>
    </LatexContainer>
  );
};
