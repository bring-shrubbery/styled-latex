import React from 'react';

import {GlobalLatexStyles, LatexFonts} from '../components/global';
import {H1, H2, H3, H4} from '../components/headings';
import {Paragraph} from '../components/paragraph';
import {LatexContainer} from '../components/layout';
import {Link} from '../components/link';

export const MainExampleComponent = () => {
  return (
    <LatexContainer>
      <GlobalLatexStyles />
      <LatexFonts />
      <header>
        <H1>
          <span className="latex">
            L<span>a</span>T<span>e</span>X
          </span>
          .css
        </H1>
        <Paragraph author>
          Vincent Dörig <br />
          May 2020
        </Paragraph>
      </header>

      <div className="abstract">
        <H2>Abstract</H2>
        <Paragraph>
          This almost className-less CSS library turns your HTML document into a
          website that looks like a
          <span className="latex">
            L<span>a</span>T<span>e</span>X
          </span>
          document. Write semantic HTML, add
          <code className="language-html">
            &lt;link rel="stylesheet" href="https://latex.now.sh/style.css"&gt;
          </code>
          to the <code className="language-html">&lt;head&gt;</code> of your
          project and you are good to go. The source code can be found on GitHub
          at
          <Link href="https://github.com/vincentdoerig/latex-css">
            https://github.com/vincentdoerig/latex-css
          </Link>
          .
        </Paragraph>
      </div>

      <nav role="navigation" className="toc">
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
      </nav>

      <main>
        <article>
          <H2 id="getting-started">Getting Started</H2>
          <ul>
            <li>
              Add
              <code className="language-html">
                &lt;link rel="stylesheet"
                href="https://latex.now.sh/style.css"&gt;
              </code>
              to the <code className="language-html">&lt;head&gt;</code> of your
              website or install the package using{' '}
              <code>npm install latex.css</code>.
            </li>
            <li>
              (optional) Add any classes to elements described in the
              <Link href="#className-based-elements">next section</Link>.
            </li>
            <li>
              (optional) If you need support for
              <span className="latex">
                L<span>a</span>T<span>e</span>X
              </span>{' '}
              math, add the following script to include
              <Link href="https://www.mathjax.org/">MathJax</Link>:
              <pre>
                <code className="language-html">
                  &lt;script id="MathJax-script" async
                  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"&gt;&lt;/script&gt;
                </code>
              </pre>
            </li>
            <li>
              (optional) If you need syntax highlighting, add the following
              script to include
              <Link href="https://prismjs.com/">Prism</Link> and the Prism LaTeX
              stylesheet (or use any other):
              <pre>
                <code className="language-html">
                  &lt;link rel="stylesheet"
                  href="https://latex.now.sh/prism/prism.css"&gt; &lt;script
                  src="https://cdn.jsdelivr.net/npm/prismjs/prism.min.js"&gt;&lt;/script&gt;
                </code>
              </pre>
            </li>
            <li>Done.</li>
          </ul>

          <H2 id="className-based-elements">Class-based Elements</H2>
          <H3 id="author-abstract">Author and Abstract</H3>
          <Paragraph>
            Use the following code to add an author and abstract to your
            document. It will look like <Link href="#top">this</Link>.
          </Paragraph>
          <pre>
            <code className="language-html">
              &lt;p className="author"&gt;John Doe &lt;br&gt; December 7,
              2020&lt;/Paragraph&gt; &lt;div className="abstract"&gt;
              &lt;H2&gt;Abstract&lt;/H2&gt; &lt;p&gt;...&lt;/p&gt; &lt;/div&gt;
            </code>
          </pre>

          <H3 id="tdpl">Theorems, Definitions, Lemmas and Proofs</H3>
          <Paragraph>
            Theorems, definitions, lemmas and proofs are supported. Just wrap
            your content in a div and add the corresponding className to the
            element like in the following example.
          </Paragraph>

          <pre>
            <code className="language-html">
              &lt;div className="theorem"&gt;...&lt;/div&gt; &lt;div
              className="definition"&gt;...&lt;/div&gt; &lt;div
              className="lemma"&gt;...&lt;/div&gt; &lt;div
              className="proof"&gt;...&lt;/div&gt;
            </code>
          </pre>
          <Paragraph>Below are some examples.</Paragraph>
          <H4 id="proofs-theorems">Proofs & Theorems</H4>
          <div className="theorem">
            {'The real numbers $mathbb{R}$ are uncountable.'}
          </div>
          <div className="proof">
            {
              'If $mathbb{R}$ is countable, then [0, 1] is countable as well. Hence there exists a map C from $mathbb{N}$ onto [0, 1] with $$C(n)=sum_{i=1}^{infty} c_{i}(n) 10^{-i}$$ where $c_{i}(n) in{0,1, ldots, 9},$ are the digits in decimal expansion. Now consider a real number $$x=sum_{i=1}^{infty} \bar{c}_{i} 10^{-i} in[0,1]$$ with $\bar{c}_{i} \neq c_{i}(i)$. Obviously $C(n) \neq x$ for all $n in mathbb{N} .$ Hence $C$ is not onto. A contradiction.'
            }
          </div>
          <div className="theorem">
            {
              'If $S$ is both countable and infinite, then there is a bijection between $S$ and $\boldsymbol{N}$ itself.'
            }
            <sup>
              <Link href="#fn1" id="ref1">
                1
              </Link>
            </sup>
          </div>
          <div className="proof">
            For any $s \in S,$ we let $f(s)$ denote the value of $k$ such that
            $s$ is the $k$ the smallest element of $S .$ This map is well
            defined for any $s,$ because there are only finitely many natural
            numbers between 1 and $s .$ It is impossible for two different
            elements of $S$ to both be the $k$ the smallest element of $S$.
            Hence $f$ is one-to-one. Also, since $S$ is infinite, $f$ is onto.
          </div>
          <H4 id="lemmas">Lemmas</H4>
          <div className="lemma">
            An even number plus an even number results in an even number.
          </div>
          <H4 id="definitions">Definitions</H4>
          <div className="definition">
            A definition is a a statement of the meaning of a word or word group
            or a sign or symbol.
            <sup>
              <Link href="#fn2" id="ref2">
                2
              </Link>
            </sup>
          </div>

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
          <pre>
            <code className="language-html">
              &lt;link rel="stylesheet" href="https://latex.now.sh/lang/es.css"
              /&gt; ... &lt;html lang="es"&gt;
            </code>
          </pre>
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
            <label
              htmlFor="sn-1"
              className="sidenote-toggle sidenote-number"
            ></label>
            <input type="checkbox" id="sn-1" className="sidenote-toggle" />
            <span className="sidenote">
              Yay, sidenotes!. If you are on mobile, I will appear inline. If
              you are using a larger screen, the sidenote will appear to the
              right of the text.
            </span>
            .
          </Paragraph>

          <Paragraph>
            Sidenotes do need a little bit of setup, they are made up of a
            label, an invisible checkbox on top of the number and a span with
            the text inside. The superscript is set automatically and
            incremented using CSS when the checkbox has a className of{' '}
            <code>sidenote-number</code>.
          </Paragraph>
          <pre>
            <code className="language-html">
              {
                '&lt;label for="sn-1" className="sidenote-toggle sidenote-number"&gt;&lt;/label&gt; &lt;input type="checkbox" id="sn-1" className="sidenote-toggle" /&gt; &lt;span className="sidenote"&gt;&lt;!-- sidenote content --&gt;&lt;/span&gt;'
              }
            </code>
          </pre>
          <Paragraph>
            If you do not need superscripted numbers, you can opt out of the{' '}
            <code>sidenote-number</code> className and the sidenote will not
            have a number assigned. On a smaller screen, you will need to add a
            symbol inside the <code>label</code> for the user to click on.{' '}
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
          <pre>
            <code className="language-html">
              {
                '&lt;label for="sn-anything" className="sidenote-toggle"&gt;⊕&lt;/label&gt; &lt;input type="checkbox" id="sn-anything" className="sidenote-toggle" /&gt; &lt;span className="sidenote"&gt;&lt;!-- sidenote content --&gt;&lt;/span&gt;'
              }
            </code>
          </pre>
          <label htmlFor="sn-plus" className="sidenote-toggle">
            <Link href="#sn-plus-content">⊕</Link>
          </label>
          <input type="checkbox" id="sn-plus" className="sidenote-toggle" />
          <span className="sidenote" id="sn-plus-content">
            This is a sidenote without a number.
          </span>
          <Paragraph>
            Add a className of <code>left</code> to the span with the{' '}
            <code>sidenote</code> className to make the note appear on the left
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
            <span className="latex">
              L<span>a</span>T<span>e</span>X
            </span>
            .css uses Latin Modern by default. If you don't like this typeface
            (hard to read, too thin, etc.), you can switch to the{' '}
            <Link href="https://github.com/alerque/libertinus">
              <code>Libertinus</code>
            </Link>{' '}
            font family by adding a className of <code>libertinus</code> to the{' '}
            <code className="language-html">&lt;body&gt;</code> tag. Click the
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
                    <code>#008080</code>
                  </td>
                  <td>
                    <code>hsl(180, 100%, 25%)</code>
                  </td>
                  <td>
                    <code>rgb(0, 128, 128)</code>
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{color: 'goldenrod'}}>
                    Goldenrod
                  </th>
                  <td>
                    <code>#daa520</code>
                  </td>
                  <td>
                    <code>hsl(43, 74%, 49%)</code>
                  </td>
                  <td>
                    <code>rgb(218, 165, 32)</code>
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{color: 'cornflowerblue'}}>
                    Cornflowerblue
                  </th>
                  <td>
                    <code>#6495ed</code>
                  </td>
                  <td>
                    <code>hsl(219, 79%, 66%)</code>
                  </td>
                  <td>
                    <code>rgb(100, 149, 237)</code>
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{color: 'lightcoral'}}>
                    Lightcoral
                  </th>
                  <td>
                    <code>#f08080</code>
                  </td>
                  <td>
                    <code>hsl(0, 79%, 72%)</code>
                  </td>
                  <td>
                    <code>rgb(240, 128, 128)</code>
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
            a className of <code>scroll-overflow</code> to allow scrolling on
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
          <pre>
            <code className="language-html">
              &lt;link rel="stylesheet"
              href="https://latex.now.sh/prism/prism.css"&gt; &lt;script
              src="https://cdn.jsdelivr.net/npm/prismjs/prism.min.js"&gt;&lt;/script&gt;
            </code>
          </pre>
          <Paragraph>And use it like this:</Paragraph>
          <pre>
            <code className="language-html">
              &lt;pre&gt; &lt;code className="language-html"&gt; &lt;!-- your
              HTML code snippet --&gt; &lt;/code&gt; &lt;/pre&gt;
            </code>
          </pre>
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
        </article>
      </main>
    </LatexContainer>
  );
};
