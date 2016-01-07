

export default function() {
  this.transition(
    this.onInitialRender(),
    this.use('fade')
  );

  this.transition(
    this.fromRoute('index'),
    this.toRoute('participant'),
    this.use('to-left'),
    this.reverse('to-right')
  );
}
