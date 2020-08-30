class EventsController < ApplicationController
  def index
    @events = Event.select(:id, :title, :start_datetime, :location)
      .order(start_datetime: :asc)
  end
end
