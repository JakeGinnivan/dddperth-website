import * as React from 'react'
import {Fragment} from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';
import { FAQ } from 'config/types';

interface FaqListProps {
  faqs : FAQ[];
}

const FaqList : React.StatelessComponent<FaqListProps> = ({faqs}) =>
  <PanelGroup accordion className="accordion" id="faqs-accordion">
    {faqs.map((faq, i) => <Panel eventKey={i} key={i}>
      <Panel.Heading>
        <Panel.Title toggle>{faq.Question}</Panel.Title>
      </Panel.Heading>
      <Panel.Body collapsible>
        {faq.Answer
          ? <p>{faq.Answer}</p>
          : <Fragment>{faq.AnswerWithoutParagraph}</Fragment>
        }
      </Panel.Body>
    </Panel>)}
  </PanelGroup>

export default FaqList;