defmodule CaniagreeWeb.ParagraphController do
  use CaniagreeWeb, :controller

  alias Caniagree.Services
  alias Caniagree.Services.Paragraph

  action_fallback CaniagreeWeb.FallbackController

  def index(conn, _params) do
    paragraphs = Services.list_paragraphs()
    render(conn, "index.json", paragraphs: paragraphs)
  end

  def create(conn, %{"paragraph" => paragraph_params}) do
    with {:ok, %Paragraph{} = paragraph} <- Services.create_paragraph(paragraph_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", paragraph_path(conn, :show, paragraph))
      |> render("show.json", paragraph: paragraph)
    end
  end

  def show(conn, %{"id" => id}) do
    paragraph = Services.get_paragraph!(id)
    render(conn, "show.json", paragraph: paragraph)
  end

  def update(conn, %{"id" => id, "paragraph" => paragraph_params}) do
    paragraph = Services.get_paragraph!(id)

    with {:ok, %Paragraph{} = paragraph} <- Services.update_paragraph(paragraph, paragraph_params) do
      render(conn, "show.json", paragraph: paragraph)
    end
  end

  def delete(conn, %{"id" => id}) do
    paragraph = Services.get_paragraph!(id)
    with {:ok, %Paragraph{}} <- Services.delete_paragraph(paragraph) do
      send_resp(conn, :no_content, "")
    end
  end

  def upvote(conn, %{"id" => id}) do
    paragraph = Services.get_paragraph!(id)
    %{up_vote: up} = paragraph
    Services.update_paragraph(paragraph, %{up_vote: up + 1})
    send_resp(conn, :no_content, "")
  end

  def downvote(conn, %{"id" => id}) do
    paragraph = Services.get_paragraph!(id)
    %{down_vote: down} = paragraph
    Services.update_paragraph(paragraph, %{down_vote: down + 1})
    send_resp(conn, :no_content, "")
  end
end
