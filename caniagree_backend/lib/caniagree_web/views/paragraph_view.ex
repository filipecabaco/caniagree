defmodule CaniagreeWeb.ParagraphView do
  use CaniagreeWeb, :view
  alias CaniagreeWeb.ParagraphView

  def render("index.json", %{paragraphs: paragraphs}) do
    %{data: render_many(paragraphs, ParagraphView, "paragraph.json")}
  end

  def render("show.json", %{paragraph: paragraph}) do
    %{data: render_one(paragraph, ParagraphView, "paragraph.json")}
  end

  def render("paragraph.json", %{paragraph: paragraph}) do
    %{id: paragraph.id,
      body: paragraph.body,
      up_vote: paragraph.up_vote,
      down_vote: paragraph.down_vote}
  end
end
